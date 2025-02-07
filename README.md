This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 项目概述

LYRA AI 是一个面向人工智能代理的操作系统门户网站，基于 Next.js 框架开发。项目包含以下核心功能：

- **企业级导航系统**：根据不同页面场景（首页/Framework页）自适应的导航栏
- **视觉系统**：
  - 具备粒子效果的动态首页背景
  - 响应式布局框架
  - 多页面主题支持（暗黑/浅色模式）
- **模块化架构**：
  - 组件化开发（容器、导航栏、滑块等可复用组件）
  - CSS Module + Tailwind CSS 样式管理
  - 路由级代码分割

## 技术栈
- **核心框架**: Next.js 15.1.6 + React 19
- **样式方案**: Tailwind CSS 3.4 + 自定义 CSS Module
- **状态管理**: Zustand
- **动画库**: Framer Motion 12.4
- **UI组件库**: Radix UI

## 项目结构
src/
├─ components/         # 可复用组件
│   ├─ Container.js    # 页面容器组件
│   ├─ Navbar.js       # 自适应导航组件
│   └─ HeroSlider.js   # 首页动效滑块
├─ pages/              # 页面路由
│   ├─ index.js        # 首页
│   ├─ framework.js    # 框架详情页
│   └─ api/            # API路由
styles/               # 样式文件
├─ globals.css         # 全局样式
└─ .module.css         # 模块化样式

## 开发指南
bash
# 安装依赖（使用 pnpm）
pnpm install
开发模式（端口 3000）
pnpm dev
生产构建
pnpm build && pnpm start


## 核心组件说明
**Navbar**
- 支持 `home` 和 `framework` 两种变体
- 响应式布局，包含社交链接和路由导航

**HeroContainer**
- 固定定位的页面容器
- 自动内容居中（最大宽度 1200px）
- z-index 层级管理

**配置说明**
- `tailwind.config.mjs` 管理主题变量和插件配置
- 通过 CSS Variables 实现深色/浅色模式切换

## 维护
- 界面变更应优先使用 Tailwind 工具类
- 新增页面请使用既有布局容器（Container）
- 修改全局样式需同步更新暗黑模式变量
- SVG资源需通过`public/`目录统一管理