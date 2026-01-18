# 如何为发表的文章添加 Google Scholar 引用

本指南将帮助您为网站上的文章添加 Google Scholar 引用数显示。

## 前提条件

1. **Google Scholar 用户 ID 已配置**
   - 文件：`_data/socials.yml`
   - 字段：`scholar_userid: 3g_VFZgAAAAJ`
   - ✅ 已配置完成

2. **Google Scholar 徽章已启用**
   - 文件：`_config.yml`
   - 字段：`enable_publication_badges.google_scholar: true`
   - ✅ 已启用

## 步骤 1：获取文章的 Google Scholar ID

对于每篇您想要显示引用数的文章，您需要获取其在 Google Scholar 中的文章 ID：

### 方法一：从 Google Scholar 个人资料页面获取

1. 访问您的 Google Scholar 个人资料：`https://scholar.google.com/citations?user=3g_VFZgAAAAJ`
2. 找到您要添加的文章
3. 点击文章标题下方的引号图标（"）
4. 在弹出的窗口中，点击 "Cite" 或直接查看 URL
5. 在 URL 中找到 `citation_for_view` 参数，例如：
   ```
   https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3g_VFZgAAAAJ&citation_for_view=3g_VFZgAAAAJ:u5HHmVD_uO8C
   ```
   其中 `u5HHmVD_uO8C` 就是该文章的 `google_scholar_id`

### 方法二：从文章详情页 URL 获取

1. 在 Google Scholar 中搜索您的文章
2. 点击文章标题进入详情页
3. 查看浏览器地址栏的 URL
4. 找到类似 `citation_for_view=USER_ID:ARTICLE_ID` 的部分
5. `ARTICLE_ID` 就是您需要的 `google_scholar_id`

## 步骤 2：在 BibTeX 文件中添加 google_scholar_id

打开 `_bibliography/papers.bib` 文件，为每篇文章添加 `google_scholar_id` 字段：

### 示例 1：已有文章添加引用

```bibtex
@article{boers2025destabilization,
  abbr={Nat. Geosci.},
  bibtex_show={true},
  title={Destabilization of Earth system tipping elements},
  author={Boers*, Niklas and Liu*, Teng and ...},
  journal={Nature Geoscience},
  year={2025},
  doi={10.1038/s41561-025-01787-0},
  selected={true},
  preview={tp1.png},
  google_scholar_id={u5HHmVD_uO8C}  # 添加这一行
}
```

### 示例 2：新文章添加引用

```bibtex
@article{xie2026warming,
  abbr={Preprint},
  bibtex_show={true},
  title={Warming-driven rise in soil moisture entropy signals destabilization of the Asian Water Tower},
  author={Xie, Yiran and Liu#, Teng and ...},
  journal={arXiv preprint arXiv:2601.01534},
  year={2026},
  doi={https://doi.org/10.48550/arXiv.2601.01534},
  google_scholar_id={YOUR_ARTICLE_ID_HERE}  # 添加这一行，替换为实际的 ID
}
```

## 步骤 3：验证配置

1. **保存文件**：保存 `papers.bib` 文件

2. **重新构建网站**：
   ```bash
   # 如果使用 Docker
   docker compose restart
   
   # 如果使用本地安装
   bundle exec jekyll serve
   ```

3. **查看效果**：
   - 访问 `http://localhost:4000/publications/`（或您的本地地址）
   - 找到您添加了 `google_scholar_id` 的文章
   - 应该能看到一个蓝色的 Google Scholar 徽章，显示引用数

## 注意事项

1. **引用数更新**：
   - 引用数是通过插件自动从 Google Scholar 获取的
   - 首次访问时可能需要几秒钟来获取数据
   - 为了避免被 Google Scholar 限制，插件会在请求之间添加随机延迟（1.5-3.5秒）

2. **预印本文章**：
   - 预印本（如 arXiv）文章在 Google Scholar 中可能还没有引用数
   - 如果文章还没有被 Google Scholar 索引，可能无法获取引用数
   - 这种情况下，徽章可能显示 "N/A" 或无法显示

3. **ID 格式**：
   - `google_scholar_id` 通常是 11-12 个字符的字符串
   - 只包含字母、数字和可能的特殊字符
   - 不要包含 URL 参数（如 `&hl=en`）

4. **多个作者**：
   - 如果文章有多个作者，确保使用您个人 Google Scholar 资料中的文章 ID
   - 不同作者的个人资料中，同一篇文章可能有不同的 ID

## 故障排除

### 问题：引用数显示为 "N/A"

**可能原因**：
- 文章 ID 不正确
- 文章尚未被 Google Scholar 索引
- Google Scholar 暂时无法访问

**解决方法**：
1. 检查 `google_scholar_id` 是否正确
2. 在浏览器中直接访问 Google Scholar 文章页面验证
3. 查看 Jekyll 构建日志中的错误信息

### 问题：徽章不显示

**可能原因**：
- `google_scholar_id` 字段缺失或格式错误
- `enable_publication_badges.google_scholar` 未启用

**解决方法**：
1. 检查 `_config.yml` 中 `enable_publication_badges.google_scholar` 是否为 `true`
2. 检查 BibTeX 文件中 `google_scholar_id` 字段格式是否正确
3. 确保 `scholar_userid` 在 `_data/socials.yml` 中正确配置

### 问题：构建时出现错误

**可能原因**：
- Ruby 依赖缺失（需要 `nokogiri` 和 `active_support`）
- 网络连接问题

**解决方法**：
```bash
# 确保依赖已安装
bundle install

# 检查插件文件是否存在
ls _plugins/google-scholar-citations.rb
```

## 参考示例

查看 `_bibliography/papers.bib` 文件中的示例条目（第 36-62 行），可以看到一个完整的配置示例：

```bibtex
@article{PhysRev.47.777,
  ...
  google_scholar_id={qyhmnyLat1gC},
  ...
}
```

## 更多信息

- Google Scholar 个人资料：https://scholar.google.com/citations?user=3g_VFZgAAAAJ
- Jekyll Scholar 文档：https://github.com/inukshuk/jekyll-scholar
- al-folio 主题文档：https://github.com/alshedivat/al-folio
