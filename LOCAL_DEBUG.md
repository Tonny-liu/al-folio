# 本地运行和调试指南

## 方法一：使用 Docker（推荐）

### 1. 安装 Docker

**macOS:**
```bash
# 使用 Homebrew 安装
brew install --cask docker

# 或者从官网下载 Docker Desktop for Mac
# https://www.docker.com/products/docker-desktop
```

安装完成后，启动 Docker Desktop 应用程序。

### 2. 运行本地服务器

在项目根目录下执行：

```bash
# 拉取最新的 Docker 镜像
docker compose pull

# 启动 Jekyll 服务器
docker compose up
```

或者使用精简版镜像（体积更小）：
```bash
docker compose -f docker-compose-slim.yml up
```

### 3. 访问网站

打开浏览器访问：**http://localhost:8080**

### 4. 实时预览

修改文件后，Jekyll 会自动重新构建，刷新浏览器即可看到更改。

### 5. 停止服务器

按 `Ctrl + C` 停止服务器，或使用：
```bash
docker compose down
```

---

## 方法二：本地安装（不使用 Docker）

### 1. 安装依赖

**安装 Ruby:**
```bash
# 使用 Homebrew
brew install ruby

# 或使用 rbenv（推荐，便于管理 Ruby 版本）
brew install rbenv ruby-build
rbenv init
rbenv install 3.3.5  # 检查 .github/workflows/deploy.yml 中的 Ruby 版本
rbenv global 3.3.5
```

**安装 Bundler:**
```bash
gem install bundler
```

**安装 Python 和 Jupyter（用于支持 Jupyter notebook）:**
```bash
brew install python
pip install jupyter
```

### 2. 安装项目依赖

```bash
cd /Users/tonnyliu/GitHub/al-folio
bundle install
```

### 3. 运行本地服务器

```bash
bundle exec jekyll serve
```

### 4. 访问网站

打开浏览器访问：**http://localhost:4000**

### 5. 实时预览

修改文件后，Jekyll 会自动重新构建，刷新浏览器即可看到更改。

### 6. 停止服务器

按 `Ctrl + C` 停止服务器。

---

## 调试技巧

### 查看构建日志

如果遇到错误，查看详细的构建日志：
```bash
# Docker 方式
docker compose logs -f

# 本地方式
bundle exec jekyll serve --verbose
```

### 强制重新构建

如果需要完全重新构建：
```bash
# Docker 方式
docker compose down
docker compose up --build

# 本地方式
bundle exec jekyll clean
bundle exec jekyll serve
```

### 检查语法错误

在修改 `_pages/publications.md` 后，如果页面无法正常显示：
1. 检查浏览器控制台（F12）是否有 JavaScript 错误
2. 检查 Jekyll 构建日志是否有 Liquid 模板错误
3. 确保 ECharts 库正确加载

### 测试图表功能

1. 打开 http://localhost:8080/publications/（或 http://localhost:4000/publications/）
2. 打开浏览器开发者工具（F12）
3. 在 Console 中检查是否有 JavaScript 错误
4. 在 Network 标签中确认 ECharts 库已加载

---

## 常见问题

### Docker 相关问题

**问题：端口 8080 已被占用**
```bash
# 修改 docker-compose.yml 中的端口映射
ports:
  - 8081:8080  # 改为 8081
```

**问题：权限错误**
```bash
# 在 docker-compose.yml 中取消注释 build 部分，并设置正确的用户 ID
build:
  args:
    USERID: $(id -u)
    USERNAME: $(whoami)
    GROUPID: $(id -g)
    GROUPNAME: $(id -gn)
```

### Jekyll 相关问题

**问题：依赖安装失败**
```bash
# 更新 Bundler
gem update bundler

# 清理并重新安装
bundle clean --force
bundle install
```

**问题：页面无法访问**
- 检查 `_config.yml` 中的 `url` 和 `baseurl` 配置
- 确保 Jekyll 服务器正在运行
- 检查防火墙设置

---

## 快速命令参考

```bash
# Docker 方式
docker compose up          # 启动服务器
docker compose down        # 停止服务器
docker compose logs        # 查看日志
docker compose restart     # 重启服务器

# 本地方式
bundle exec jekyll serve   # 启动服务器
bundle exec jekyll build   # 构建网站（不启动服务器）
bundle exec jekyll clean   # 清理构建文件
```



