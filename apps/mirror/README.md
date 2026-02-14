# HanaMirror 镜像站

一个简单的镜像站.

powered by Cloudflare Workers & docker registry.

- [Github 镜像](#github-镜像)
- [Docker 镜像](#docker-镜像)
- [Mikanani 镜像](#mikanani-镜像)
- [Gravatar 镜像](#gravatar-镜像)

## Github 镜像

在 Github 链接前加上 `https://gh.shirosakihana.moe/`.

e.g.:

```bash
# 原链接 https://github.com/username/repo/releases/download/v1.0.0/file.zip
# 更改后 https://gh.shirosakihana.moe/https://github.com/username/repo/releases/download/v1.0.0/file.zip

# 原链接 https://raw.githubusercontent.com/username/repo/main/file.txt
# 更改后 https://gh.shirosakihana.moe/https://raw.githubusercontent.com/username/repo/main/file.txt
```

## Docker 镜像

支持的源:

| 类型                             | 地址                                                     |
| -------------------------------- | -------------------------------------------------------- |
| Docker Hub                       | [dhub.shirosakihana.moe](https://dhub.shirosakihana.moe) |
| GitHub Container Registry (ghcr) | [ghcr.shirosakihana.moe](https://ghcr.shirosakihana.moe) |

## 方法1

配置 Docker 后在 docker pull 地址前加上镜像地址.

e.g.:

```bash
# 编辑 Docker 配置文件
sudo vim /etc/docker/daemon.json

# 添加镜像配置（保留原有配置需用逗号分隔）
{
  "registry-mirrors": [
    "https://dhub.shirosakihana.moe",
    "https://ghcr.shirosakihana.moe"
  ]
}

# 重载服务配置
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 方法2

更改拉取镜像时添加前缀

```bash
# 原地址 docker pull nginx
# 更改后 docker pull dhub.shirosakihana.moe/library/nginx

# 原地址 docker pull username/repo:tag
# 更改后 docker pull dhub.shirosakihana.moe/username/repo:tag

# 原地址 docker pull ghcr.io/username/repo:tag
# 更改后 docker pull ghcr.shirosakihana.moe/username/repo:tag
```

额外支持:

docker 安装脚本: `https://mirror.shirosakihana.moe/https://get.docker.com`

docker 源证书: `https://mirror.shirosakihana.moe/https://download.docker.com/linux/<release name>/gpg`

## Mikanani 镜像

使用 `https://mikanani.shirosakihana.moe/` 替换 `https://mikanani.me/`.

e.g.:

```bash
# 原链接 https://mikanani.me/RSS/Bangumi?bangumiId=1833&subgroupid=370
# 更改后 https://mikanani.shirosakihana.moe/RSS/Bangumi?bangumiId=1833&subgroupid=370
```

仅代理了 /RSS 目录方便 RSS 订阅, 仍需科学上网获取订阅链接.

## Gravatar 镜像

使用 `https://gravatar.shirosakihana.moe/avatar/` 替换 `https://gravatar.com/avatar/`.
