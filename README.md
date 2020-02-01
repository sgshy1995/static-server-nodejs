## 静态服务器

使用 Node.js 构建的静态服务器。

### 使用环境

首先，保证你已安装 [Node.js](https://nodejs.org/zh-cn/download/)，如已安装请忽略。

### 创建静态资源目录

你的静态文件目录默认需要放在 `./public/`，你可以在 server.js 中做出设置。

### 创建服务环境

指定端口（必须）。

```sh
# 标准命令格式
node server.js port
```

在 8080 端口的示例：

```sh
# 生产环境
node server.js 8080
```

如果是本地开发环境，推荐使用 [node-dev](https://www.npmjs.com/package/node-dev)。

```sh
# 开发环境
npm install -g node-dev
node-dev server.js 8080
```

### 本地预览

如果按照示例方法使用服务器，现在你可以在本地预览你的静态页面了。

`http://localhost:8080`

### 关于服务器

现在服务器只支持下面几种文件：

- html
- css
- js
- json
- jpg
- jpeg
- png
- gif
- mp3

如有需要，可以继续配置，添加 `pathStyle` 的内容即可。