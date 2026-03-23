document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('pub-network-container');
    if (!container) return; // 确保容器存在

    const tooltip = d3.select('#pub-tooltip');

    // ==========================================
    // 节点点击弹窗 (HTML overlay)
    // ==========================================
    const nodePopup = document.createElement('div');
    nodePopup.id = 'node-popup';
    nodePopup.style.cssText = [
        'position:absolute',
        'display:none',
        'background:var(--global-bg-color,#fff)',
        'border:1px solid var(--global-theme-color,#2698ba)',
        'border-radius:8px',
        'padding:10px 14px',
        'box-shadow:0 4px 16px rgba(0,0,0,0.15)',
        'max-width:220px',
        'z-index:100',
        'pointer-events:auto',
        'font-size:12px',
        'line-height:1.5',
        'color:var(--global-text-color,#333)'
    ].join(';');
    container.appendChild(nodePopup);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    const isMobile = width < 768; // 判断是否为手机端
    const ringRadius = isMobile ? Math.min(width, height) / 2 * 0.85 : Math.min(width, height) / 2 * 0.8; // 手机端稍微放大占比

    // 清空旧 SVG
    d3.select("#pub-network-container").selectAll("svg").remove();

    const svg = d3.select("#pub-network-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height]);

    // ==========================================
    // 1. 定义 arrowhead 标记 (用于 cite 连线)
    // ==========================================
    svg.append("defs").selectAll("marker")
        .data(["cite"])
        .join("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 24) // 适配 r=15 的节点边缘
        .attr("refY", 0)
        .attr("markerWidth", 7)
        .attr("markerHeight", 7)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-4 L10,0 L0,4 L2,0") // 锐利箭头路径
        .attr("fill", "var(--global-text-color, #999)"); // 适配明暗模式

    // ==========================================
    // 2. 绘制背景辅助大圆环 (虚线轨道)
    // ==========================================
    svg.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", ringRadius)
        .attr("fill", "none")
        .attr("stroke", "var(--global-divider-color, #e0e0e0)") // 适配 al-folio 的分割线颜色
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "6,6") // 虚线轨道
        .style("pointer-events", "none"); // 穿透鼠标事件

    const dataUrl = window.graphDataUrl || "/assets/json/publications_graph.json";

    // 读取数据
    d3.json(dataUrl).then(function (data) {

        const papers = data.nodes.filter(d => d.type === "paper");
        const topics = data.nodes.filter(d => d.type === "topic");

        // ==========================================
        // 3. 计算静态布局坐标 (三角函数版)
        // ==========================================

        // 计算 Paper 坐标 (均匀分布在外圆环上)
        const paperCount = papers.length;
        papers.forEach((d, i) => {
            const angle = (i / paperCount) * 2 * Math.PI - Math.PI / 2;
            d.x = ringRadius * Math.cos(angle);
            d.y = ringRadius * Math.sin(angle);
        });

        // 计算 Topic 坐标 (垂直错落列表排布)
        const topicCount = topics.length;
        const lineSpacing = isMobile ? 30 : 40; // 垂直间距
        const xOffset = isMobile ? 20 : 35;     // 左右错开距离
        const startY = -((topicCount - 1) * lineSpacing) / 2;

        topics.forEach((d, i) => {
            if (topicCount === 1) {
                d.x = 0; // 单个主题居中
            } else {
                d.x = (i % 2 === 0 ? -1 : 1) * xOffset; // 左右交替偏移
            }
            d.y = startY + (i * lineSpacing); // 垂直排列
        });

        // 映射 links 的 source/target 信息到节点对象上
        const nodeById = new Map(data.nodes.map(d => [d.id, d]));
        data.links.forEach(link => {
            if (typeof link.source === "string") link.source = nodeById.get(link.source);
            if (typeof link.target === "string") link.target = nodeById.get(link.target);
        });

        // ==========================================
        // 4. 绘制图形元素
        // ==========================================

        // 绘制连线 (link)
        const link = svg.append("g")
            .selectAll("path")
            .data(data.links)
            .join("path")
            .attr("fill", "none")
            // 适配明暗模式颜色
            .attr("stroke", "var(--global-text-color, #999)")
            // 调节透明度：belong 线很淡 (0.1)，cite 引用线中等 (0.6)
            .attr("stroke-opacity", d => d.type === "belong" ? 0.1 : 0.8)
            // 调节粗细：cite 引用线稍微加粗 (1.5)
            .attr("stroke-width", d => d.type === "cite" ? 0.4 : 0.6)
            // 为 cite 线添加箭头
            .attr("marker-end", d => d.type === "cite" ? "url(#arrow-cite)" : null)
            // 计算静态弧形路径
            .attr("d", d => {
                if (d.type === "cite") {
                    const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
                    return `M${d.source.x},${d.source.y} A${r},${r} 0 0,1 ${d.target.x},${d.target.y}`;
                } else {
                    return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
                }
            });

        // 绘制节点组 (node)
        const node = svg.append("g")
            .selectAll("g")
            .data(data.nodes)
            .join("g")
            .attr("transform", d => `translate(${d.x},${d.y})`);

        // ==========================================
        // 5. 绘制文字和圆圈
        // ==========================================

        // 绘制 Topic 节点 (文字)
        const topicNodes = node.filter(d => d.type === "topic");
        topicNodes.append("text")
            .text(d => d.label)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("font-weight", "bold")
            .attr("font-size", isMobile ? "14px" : "18px")
            .attr("fill", "var(--global-text-color, #333)"); // 适配明暗模式

        // 移除光环描边技巧，允许连线穿透

        // 绘制 Paper 节点 (彩色圆形)
        const paperNodes = node.filter(d => d.type === "paper");
        paperNodes.append("circle")
            .attr("r", isMobile ? 8 : 12) // 节点半径
            .attr("fill", d => d.color || "#ccc") // JSON 中配置颜色
            .attr("stroke", "var(--global-bg-color, #fff)") // 用背景色描边制造间隙
            .attr("stroke-width", 2);

        // 绘制 Paper 文字标签
        paperNodes.append("text")
            .text(d => d.label)
            // 自动根据坐标调整文字方向
            .attr("x", d => d.x > 0 ? (isMobile ? 12 : 22) : (isMobile ? -12 : -22))
            .attr("y", isMobile ? 3 : 4)
            .attr("text-anchor", d => d.x > 0 ? "start" : "end")
            .attr("fill", "var(--global-text-color, #333)")
            .attr("font-size", isMobile ? "9px" : "11px");

        // ==========================================
        // 6. 核心优化：高亮交互逻辑
        // ==========================================

        let pinnedNode = null;

        // 关闭弹窗的辅助函数
        function closePopup() {
            nodePopup.style.display = 'none';
        }

        // 打开弹窗的辅助函数
        function openPopup(d, svgX, svgY) {
            const pubUrl = d.bibKey ? `/publications/#${d.bibKey}` : '/publications/';
            nodePopup.innerHTML = `
                <!-- <div style="font-weight:600;margin-bottom:6px;color:var(--global-theme-color,#2698ba)">${d.label}</div> -->
                <div style="margin-bottom:8px;font-size:11px;opacity:0.85">${d.title || ''}</div>
                <a href="${pubUrl}" style="
                    display:inline-block;
                    padding:4px 10px;
                    background:var(--global-theme-color,#2698ba);
                    color:#fff;
                    border-radius:4px;
                    text-decoration:none;
                    font-size:11px;
                    font-weight:600;
                    transition:opacity 0.2s
                " onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1"
                >View in Publications &rarr;</a>
            `;
            // 将 SVG 坐标转换为容器坐标
            // SVG viewBox 偏移为 (-width/2, -height/2)
            const cw = container.clientWidth || width;
            const ch = container.clientHeight || height;
            const scaleX = cw / width;
            const scaleY = ch / height;
            let px = (svgX + width / 2) * scaleX + 14;
            let py = (svgY + height / 2) * scaleY + 14;
            // 防止溢出容器右边
            const popupW = 224;
            if (px + popupW > cw) px = Math.max(0, (svgX + width / 2) * scaleX - popupW - 14);
            nodePopup.style.left = px + 'px';
            nodePopup.style.top = py + 'px';
            nodePopup.style.display = 'block';
        }

        // 点击空白区域恢复
        svg.on("click", () => {
            if (pinnedNode) {
                pinnedNode = null;
                tooltip.style("opacity", 0);
                paperNodes.select("circle").attr("stroke", "var(--global-bg-color, #fff)");
                link.transition().duration(200).attr("stroke-opacity", d => d.type === "belong" ? 0.1 : 0.6);
                node.transition().duration(200).attr("opacity", 1);
                closePopup();
            }
        });

        // 【优化 2】悬浮在 Paper 节点上的高亮逻辑
        paperNodes
            .on("mouseover", function (event, d) {
                // 判断是否允许显示 tooltip（如果没有固定，或者当前节点被固定，或者当前节点与被固定的节点相连）
                const isAllowTooltip = !pinnedNode || pinnedNode.id === d.id || data.links.some(l =>
                    (l.source.id === pinnedNode.id && l.target.id === d.id) ||
                    (l.target.id === pinnedNode.id && l.source.id === d.id)
                );

                if (isAllowTooltip) {
                    const [mouseX, mouseY] = d3.pointer(event, document.getElementById('pub-network-container'));
                    let tooltipX = mouseX + 10;
                    // 如果在手机端且靠右，提示框向左偏，防止溢出屏幕
                    if (isMobile && tooltipX > width * 0.5) {
                        tooltipX = mouseX - 120; // 根据大概宽度向左偏移
                    }
                    tooltip.style("opacity", 1)
                        .html(`Title: ${d.title}`)
                        .style("left", tooltipX + "px")
                        .style("top", (mouseY + 10) + "px");
                }

                if (pinnedNode) return; // 如果被固定，只允许显示 tooltip，忽略其余动画和高亮

                // 原来的描边高亮逻辑 (保留)
                d3.select(this).select("circle").attr("stroke", "var(--global-theme-color, #2698ba)");

                const connectedNodes = new Set();

                // 找出与 hovered paper 相连的所有节点
                data.links.forEach(l => {
                    if (l.source.id === d.id) connectedNodes.add(l.target.id);
                    if (l.target.id === d.id) connectedNodes.add(l.source.id);
                });

                // 连线淡出：只高亮连接该节点的线
                link.transition().duration(200).attr("stroke-opacity", l => {
                    return (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.05;
                });

                // 节点淡出：高亮 paper 本身和连接的节点
                node.transition().duration(200).attr("opacity", n => {
                    return (n.id === d.id || connectedNodes.has(n.id)) ? 1 : 0.1;
                });
            })
            .on("mousemove", function (event, d) {
                const isAllowTooltip = !pinnedNode || pinnedNode.id === d.id || data.links.some(l =>
                    (l.source.id === pinnedNode.id && l.target.id === d.id) ||
                    (l.target.id === pinnedNode.id && l.source.id === d.id)
                );

                if (!isAllowTooltip) return;

                // 让 tooltip 稳稳地跟随鼠标，并贴近节点
                const [mouseX, mouseY] = d3.pointer(event, document.getElementById('pub-network-container'));
                let tooltipX = mouseX + 10;
                if (isMobile && tooltipX > width * 0.5) {
                    tooltipX = mouseX - 120;
                }
                tooltip.style("left", tooltipX + "px")
                    .style("top", (mouseY + 10) + "px");
            })
            .on("mouseout", function (event, d) {
                const isAllowTooltip = !pinnedNode || pinnedNode.id === d.id || data.links.some(l =>
                    (l.source.id === pinnedNode.id && l.target.id === d.id) ||
                    (l.target.id === pinnedNode.id && l.source.id === d.id)
                );

                if (isAllowTooltip) {
                    tooltip.style("opacity", 0);
                }

                if (pinnedNode) return; // 如果被固定，不执行淡出恢复

                // 描边重置逻辑 
                d3.select(this).select("circle").attr("stroke", "var(--global-bg-color, #fff)");

                // 【新增】恢复所有元素到原始透明度
                link.transition().duration(200).attr("stroke-opacity", d => d.type === "belong" ? 0.1 : 0.6);
                node.transition().duration(200).attr("opacity", 1);
            })
            .on("click", function (event, d) {
                event.stopPropagation(); // 阻止事件冒泡到 SVG 导致触发空白点击
                if (!pinnedNode) {
                    pinnedNode = d; // 记录固定节点
                    openPopup(d, d.x, d.y);
                } else if (pinnedNode === d) {
                    pinnedNode = null; // 再次点击解除固定
                    closePopup();
                } else {
                    // 点击另一个节点：切换到新节点
                    pinnedNode = d;
                    openPopup(d, d.x, d.y);
                }
            });

        // 【优化 1】悬浮在文字 (Topic) 上的高亮逻辑 (保留并微调)
        topicNodes
            .style("cursor", "pointer") // 鼠标变手型提示可交互
            .on("mouseover", function (event, d) {
                if (pinnedNode) return; // 如果被固定，忽略其余 hover

                const connectedPapers = new Set();
                data.links.forEach(l => {
                    if (l.source.id === d.id) connectedPapers.add(l.target.id);
                    if (l.target.id === d.id) connectedPapers.add(l.source.id);
                });

                // 连线淡出：只高亮连接该 Topic 的线
                link.transition().duration(200).attr("stroke-opacity", l => {
                    return (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.05;
                });

                // 节点淡出：只高亮 Topic 本身以及连接的节点
                node.transition().duration(200).attr("opacity", n => {
                    return (n.id === d.id || connectedPapers.has(n.id)) ? 1 : 0.1;
                });
            })
            .on("mouseout", function () {
                if (pinnedNode) return; // 如果被固定，不执行淡出恢复

                // 恢复所有元素到原始透明度
                link.transition().duration(200).attr("stroke-opacity", d => d.type === "belong" ? 0.1 : 0.6);
                node.transition().duration(200).attr("opacity", 1);
            })
            .on("click", function (event, d) {
                event.stopPropagation(); // 阻止事件冒泡到 SVG
                if (!pinnedNode) {
                    pinnedNode = d; // 记录固定节点
                } else if (pinnedNode === d) {
                    pinnedNode = null; // 再次点击解除固定
                }
            });

    }).catch(function (error) {
        console.error("加载图数据失败 / Failed to load graph data:", error);
    });
});