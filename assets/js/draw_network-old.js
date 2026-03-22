document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('pub-network-container');
    if (!container) return;

    const tooltip = d3.select('#pub-tooltip');

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    // 如果觉得整体还是太挤，可以把这里的 0.7 改成 0.75 或 0.8 来扩大圆环的总面积
    const ringRadius = Math.min(width, height) / 2 * 0.8;

    d3.select("#pub-network-container").selectAll("svg").remove();

    const svg = d3.select("#pub-network-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height]);

    // ==========================================
    // 调整：箭头向外推，适应变大的节点
    // ==========================================
    svg.append("defs").selectAll("marker")
        .data(["cite"])
        .join("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        // 【修改点】原来是 16。现在节点 r=15，算上描边，refX 设为 24 刚好顶在边缘
        .attr("refX", 24)
        .attr("refY", 0)
        .attr("markerWidth", 7)
        .attr("markerHeight", 7)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-4 L10,0 L0,4 L2,0")
        .attr("fill", "var(--global-text-color, #999)");

    // 1. 绘制带有明确样式的背景大圆环 (轨道)
    svg.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", ringRadius)
        .attr("fill", "none")
        // 增强可见度，如果 css 变量失效也可显示浅灰色
        .attr("stroke", "var(--global-text-color, #666)")
        .attr("stroke-opacity", 0.15)
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "8,8")
        .style("pointer-events", "none");

    const dataUrl = window.graphDataUrl || "/assets/json/publications_graph.json";

    d3.json(dataUrl).then(function (data) {

        const topics = data.nodes.filter(d => d.type === "topic");
        const papers = data.nodes.filter(d => d.type === "paper");

        // 配置物理引擎 (严格约束版)
        const simulation = d3.forceSimulation(data.nodes)
            // belong线无需实质拉力，cite线保留引力
            .force("link", d3.forceLink(data.links).id(d => d.id)
                .distance(d => d.type === "belong" ? ringRadius : 100)
                .strength(d => d.type === "belong" ? 0 : 0.2)
            )
            // 将 topic 的吸引力汇聚在正中心
            .force("center_x", d3.forceX(0).strength(d => d.type === "topic" ? 0.8 : 0))
            .force("center_y", d3.forceY(0).strength(d => d.type === "topic" ? 0.8 : 0))
            // 控制 topic 在中心文字不要完全重叠
            .force("collide", d3.forceCollide().radius(d => d.type === "topic" ? 22 : 15).iterations(3))
            // 中心排斥力，让 topic 文字均匀分散在中心区域
            .force("charge", d3.forceManyBody().strength(d => d.type === "topic" ? -80 : -10));

        const link = svg.append("g")
            .selectAll("path")
            .data(data.links)
            .join("path")
            .attr("fill", "none")
            .attr("stroke", "var(--global-text-color, #999)")
            .attr("stroke-opacity", d => d.type === "belong" ? 0.15 : 0.6)
            .attr("stroke-width", d => d.type === "belong" ? 1 : 1.5)
            .attr("stroke-dasharray", d => d.type === "belong" ? "4,4" : "none") // belong 线虚线更好看
            .attr("marker-end", d => d.type === "cite" ? "url(#arrow-cite)" : null);

        const node = svg.append("g")
            .selectAll("g")
            .data(data.nodes)
            .join("g")
            .call(drag(simulation));

        // 绘制 Topic 节点 (圆心文字)
        node.filter(d => d.type === "topic")
            .append("text")
            .text(d => d.label)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("fill", "var(--global-text-color, #333)")
            .attr("font-weight", "bold")
            .attr("font-size", "16px");

        // 绘制 Paper 节点 (轨道上的圆圈)
        node.filter(d => d.type === "paper")
            .append("circle")
            .attr("r", 15)
            .attr("fill", d => d.color || "#ccc")
            .attr("stroke", "var(--global-bg-color, #fff)")
            .attr("stroke-width", 2);

        node.filter(d => d.type === "paper")
            .append("text")
            .text(d => d.label)
            .attr("x", 22)
            .attr("y", 4)
            .attr("fill", "var(--global-text-color, #333)")
            .attr("font-size", "11px");

        // 交互：Paper 节点的 Tooltip
        node.filter(d => d.type === "paper")
            .on("mouseover", function (event, d) {
                tooltip.style("opacity", 1)
                    .html(`<strong>${d.label}</strong><br/>Year: ${d.year}`)
                    .style("left", (event.pageX + 15) + "px")
                    .style("top", (event.pageY - 28) + "px");
                d3.select(this).select("circle").attr("stroke", "var(--global-theme-color, #2698ba)");
            })
            .on("mouseout", function () {
                tooltip.style("opacity", 0);
                d3.select(this).select("circle").attr("stroke", "var(--global-bg-color, #fff)");
            });

        // 交互：Topic 节点的悬浮高亮 
        node.filter(d => d.type === "topic")
            .style("cursor", "pointer")
            .on("mouseover", function (event, d) {
                const connectedPapers = new Set();
                data.links.forEach(l => {
                    if (l.source.id === d.id) connectedPapers.add(l.target.id);
                    if (l.target.id === d.id) connectedPapers.add(l.source.id);
                });

                link.transition().duration(200).attr("stroke-opacity", l => {
                    return (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.02;
                });

                node.transition().duration(200).attr("opacity", n => {
                    // topic 本身全亮，其他连着的亮，无关的暗
                    return (n.id === d.id || connectedPapers.has(n.id) || n.type === "topic") ? 1 : 0.1;
                });
            })
            .on("mouseout", function () {
                link.transition().duration(200).attr("stroke-opacity", d => d.type === "belong" ? 0.15 : 0.6);
                node.transition().duration(200).attr("opacity", 1);
            });

        simulation.on("tick", () => {
            // == 🌟 关键修改：绝对锁定 Paper 在圆环轨道上 ==
            // 物理引擎会计算一个 x,y，但我们通过三角函数把它强行归置到 ringRadius 的圆周上
            node.each(d => {
                if (d.type === "paper") {
                    // 确保不会出现 x=0, y=0 导致 atan2 函数无意义的情况
                    const angle = Math.atan2(d.y === 0 ? Math.random() : d.y, d.x === 0 ? Math.random() : d.x);
                    d.x = Math.cos(angle) * ringRadius;
                    d.y = Math.sin(angle) * ringRadius;
                }
            });

            // 连线路径
            link.attr("d", d => {
                if (d.type === "cite") {
                    const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
                    return `M${d.source.x},${d.source.y} A${r},${r} 0 0,1 ${d.target.x},${d.target.y}`;
                } else {
                    return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
                }
            });
            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });
    }).catch(function (error) {
        console.error("加载图数据失败 / Failed to load graph data:", error);
    });

    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
});