# 算力站访问和询盘点击统计

本站已经预埋 Google Analytics 4 统计脚本，但当前使用的是占位 ID：

```js
const GA_MEASUREMENT_ID = "G-PMRMZBNLHJ";
```

当前已经启用 Singularity Cloud / sly-cloud.com 的 GA4 统计。

## 可以统计什么

- 每天访问人数：GA4 里看 `Users` / `Active users`
- 页面访问量：GA4 里看 `Views`
- 询盘点击：GA4 事件里看 `lead_click`
- 点击来源页面：事件参数 `page_path`
- 点击的是哪个入口：事件参数 `event_label`

## 启用步骤

1. 打开 Google Analytics，创建新的 GA4 Property。
2. 创建 Web data stream，网站填写你的新算力域名。
3. 复制 Measurement ID，格式类似 `G-XXXXXXXXXX`。
4. 当前使用的 Measurement ID 是 `G-PMRMZBNLHJ`。
5. 发布后访问 GA4 的 Realtime 页面，检查是否有实时访问数据。

## 询盘事件

本站会自动统计这些点击：

- WhatsApp：`wa.me`
- 邮箱：`mailto:`
- 电话：`tel:`

事件名是：

```text
lead_click
```

建议在 GA4 中把 `lead_click` 标记为 Key event，后续做广告投放时可用作询盘转化。
