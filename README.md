# Singularity Cloud 独立站

这是一个参考 Aethir 信息架构重新设计的 GPU 算力独立站，品牌名为 Singularity Cloud。页面面向企业 GPU 算力需求方、AI 团队、游戏/渲染平台和 GPU Provider 合作方。

## 文件

- `index.html` - 首页
- `styles.css` - 页面样式
- `script.js` - 顶部导航交互
- `analytics.js` - GA4 访问统计和询盘点击统计
- `wrangler.toml` - Cloudflare Workers / Pages 静态资源配置
- `cloudflare-pages-deploy.md` - 中文上线清单
- `analytics-setup.md` - Google Analytics 设置说明
- `public/` - Cloudflare Pages 推荐发布目录

## 上线前需要替换

- 域名：当前已设置为 `sly-cloud.com`
- 品牌名：当前为 `Singularity Cloud`
- Google Analytics：把 `analytics.js` 和 `public/analytics.js` 里的 `G-REPLACE_COMPUTE_SITE` 换成新的 GA4 衡量 ID
- 联系方式：替换 WhatsApp、邮箱、微信或 Telegram
- GPU 资源：换成你实际能交付的型号、地区、价格和周期

## Cloudflare

Cloudflare Pages 推荐设置：

- Framework preset: `None`
- Build command: 留空
- Build output directory: `public`

如果使用 Workers 部署，`wrangler.toml` 已经指向 `public` 目录。
