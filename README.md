# 晚舟手记（第二版 · 蓝山夜色）

「晚舟手记」个人博客的第二版 —— 蓝山夜色（Mercury 设计系统）。暗色画布、宽体 Archivo 展示字、钴蓝单一行动色、全幅蓝调山脊 Hero 摄影。

## 技术栈

- [Astro](https://astro.build) 4.x（静态生成）
- 内容集合（`src/content/posts/`）管理文章
- 无运行时框架、无统计脚本、无评论

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 输出到 dist/
npm run preview    # 预览构建产物
```

## 写作

与第一版共用同一套内容集合。在 `src/content/posts/` 新增 Markdown，frontmatter 格式：

```yaml
---
title: 文章标题
date: 2026-08-02
tag: 工程笔记
excerpt: 摘要
minutes: 6
---
```

## 结构

- `src/pages/` —— 路由页面（首页 / 文章 / 专题 / 关于 / 订阅 / RSS）
- `src/layouts/Base.astro` —— 全站布局
- `src/styles/mercury.css` —— Mercury 设计系统
- `public/images/hero-bluehour.png` —— 首页 Hero 摄影
