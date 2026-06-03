# Singularity Cloud 算力独立站 Cloudflare Pages 上线清单

这个网站是静态官网，不需要先买传统服务器。它可以像原来的医美独立站一样，通过 GitHub + Cloudflare Pages / Workers 托管。

## 推荐购买

1. 域名：优先 `.com`，尽量短、专业、容易拼写。
2. DNS / CDN / SSL：Cloudflare。
3. 网站托管：Cloudflare Pages。
4. 代码仓库：GitHub，方便后续自动更新。

## Cloudflare Pages 自动部署

适合长期维护。以后改网站后，只要更新 GitHub，Cloudflare 会自动发布新版本。

1. 创建 GitHub 仓库，例如 `compute-power-website`。
2. 把当前文件夹内容上传到仓库。
3. 登录 Cloudflare。
4. 进入 `Workers & Pages`。
5. 创建 Pages 项目，连接 GitHub 仓库。
6. 项目设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `public`
7. 发布后，Cloudflare 会给一个临时域名，例如 `compute-power.pages.dev`。

如果界面显示 Workers 部署设置，保持：

- Build command: 留空
- Deploy command: `npx wrangler deploy`
- Path: `/`

Cloudflare 会从 `wrangler.toml` 读取 `public` 目录。

## 直接上传

适合最快上线，不想先弄 GitHub。

1. 登录 Cloudflare。
2. 进入 `Workers & Pages`。
3. 选择 Pages 的 Direct Upload。
4. 上传 `public` 文件夹里的全部文件。
5. 发布后得到一个 `pages.dev` 临时域名。

## 绑定新域名

第一步：把域名加入 Cloudflare。

1. 在 Cloudflare 添加你的新域名。
2. Cloudflare 会分配两条 nameserver。
3. 到你买域名的平台，把原 nameserver 改成 Cloudflare 提供的两条。
4. 等待生效，通常几分钟到 24 小时。

第二步：在 Cloudflare Pages 里绑定域名。

1. 进入你的 Pages 项目。
2. 打开 `Custom domains`。
3. 添加 `www.你的域名.com`。
4. 添加根域名 `你的域名.com`。
5. 等待 Cloudflare 自动签发 HTTPS 证书。

## 发布前需要替换

- 品牌名：`Singularity Cloud`
- 域名：`sly-cloud.com`
- WhatsApp：`+852 5242 5767`
- 邮箱：`duofu5566@gmail.com`
- GA4 衡量 ID：`G-REPLACE_COMPUTE_SITE`
- 实际 GPU 型号、地区、价格、交付能力

买好域名后，把域名发我，我可以继续帮你把全站链接、站点地图、GA4 和 Cloudflare 文档改成正式版。
