<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# 🔀 @roshan-labs/http

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

对 Nuxt $fetch 的封装，统一请求配置

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## 使用

1. 添加 `@roshan-labs/http` 到项目中

```bash
# 使用 pnpm
pnpm add -D @roshan-labs/http

# 使用 yarn
yarn add --dev @roshan-labs/http

# 使用 npm
npm install --save-dev @roshan-labs/http
```

2. 把 `@roshan-labs/http` 添加进 `nuxt.config.ts` 中 `modules` 选项中

```js
export default defineNuxtConfig({
  modules: [
    '@roshan-labs/http'
  ]
})
```

现在你可以在项目中使用此模块了 ✨

## 开发

```bash
# 安装依赖
npm install

# 构建垫片
npm run dev:prepare

# 运行演练场模式
npm run dev

# 构建演练场模式
npm run dev:build

# 运行代码检查
npm run lint

# 运行测试
npm run test
npm run test:watch

# 发布
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://www.npmjs.com/package/@roshan-labs/http

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://www.npmjs.com/package/@roshan-labs/http

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://www.npmjs.com/package/@roshan-labs/http

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
