# 获取 node 镜像进行构建部署，18+
FROM node:alpine

# 设置环境变量
ENV NODE_ENV=production

# 设置工作目录
RUN mkdir /app
WORKDIR /app

# 拷贝文件
COPY . /app

# 编译文件
RUN npm i
RUN npm run build

# 启动服务
RUN npm run serve