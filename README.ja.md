# Web Sample

最近の技術を取り入れたウェブアプリのサンプル実装です。やりすぎることなく、現実的に理解が用意でシンプルなリポジトリ構成を目指しています。

![Screen Shot](./docs/screenshot.gif)

- Home page(`/`) は全てのコンテンツをサーバーサイドレンダリング(SSR)でレンダリングしています。
- About page(`/about`) と Users page(`/users`) はダイナミックインポートを利用した遅延レンダリングを行っています。またSSRは、App Shell部分のみでコンテンツ部分は行っていません。

## スタック

- 主要なライブラリ
  - express
  - react
  - react-router
  - redux
  - @loadable/component
  - styled-components
  - react-intl
- 開発環境
  - webpack
  - typescript
  - eslint
  - prettier
- アプリの特徴
  - Server Side Rendering
  - i18n
  - Code Splitting

## はじめに

開発時には以下のステップを行います。

```sh
$ npm install
$ npm start
// Open localhost:3000
```

リリース時には以下のステップを行います。

```sh
$ npm install
$ npm run build
$ npm run server
// Open localhost:3000
```

## ロードマップ

- 開発環境をより早く
  - ホットモジュールリプレイスメント
- スナップショットテストのためのjestのセットアップ

## なぜそうしたか / なぜしなかったか

Q. *なぜAtomic Designを使わないのか。*  
A. 実のところ、コンポーネントをカテゴリ分けするのは非常に難しいと思います。あなたのチームがすでにしっかりとしてデザインシステムがあったりエンジニアだけのチームの場合、Atomic Designを導入するのによい兆候と言えます。しかし、もし違うなら難しいでしょう。OOUIなどのデザインは実装モデル、認知モデル、表現モデルなどいくつかのモデルがあります。どのモデルで考えるかによって、atomsなのか、moleculesなのか、organismsになのか、判断はとても難しくなります。  

Q. *なぜダイナミックインポートにはSSRしないのか。*  
A. `@loadable/component` がSSRするには [babel plugin](https://www.smooth-code.com/open-source/loadable-components/docs/server-side-rendering/) が必要です。もしそれをするならtypescriptをbabelを用いて使う必要があるでしょう。実際、それは簡単に行えるようになりました。しかし、個人的にはそれはちょっとやるすぎかなという印象があり避けました。SEO上の問題でその必要があれば、対象ページのダイナミックインポートを止めるのがシンプルに思えます。それに加え、マルチトランスパイルは不要なコード削除のような最適化を難しくするようにも思えます。  

Q. *なぜ開発環境に `ts-node` を利用しないのか。*  
A. 開発には遅すぎました。  

## Refs

- React-Router
  - [Basic - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/example/basic)
  - [Server Rendering - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/server-rendering)
  - [Code Splitting - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/code-splitting)
  - [Redux Integration - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/redux-integration)
- Redux
  - [Getting Started with Redux - Redux](https://redux.js.org/introduction/getting-started)
  - [Usage with React - Redux](https://redux.js.org/basics/usage-with-react)
  - [Usage with React Router - Redux](https://redux.js.org/advanced/usage-with-react-router)
  - [Usage With TypeScript - Redux](https://redux.js.org/recipes/usage-with-typescript)
  - [Server Rendering - Redux](https://redux.js.org/recipes/server-rendering)
- Styled Components
  - [Getting Started - styled-components: Basics](https://www.styled-components.com/docs/basics#getting-started)
  - [Server Side Rendering - styled-components: Advanced Usage](https://www.styled-components.com/docs/advanced#server-side-rendering)
- @loadable/component
  - [Comparison with React.lazy - Loadable Components](https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/)
    - ReactDOM.renderToString doesn't support React.lazy. So, we can not do SSR with React.lazy now. But @loadable/component needs @loadable/babel-plugin. But it doesn't support typescript. If you want to do SSR on server with `@loadable/component` and typescript, you have to use babel with typescript.
    - Watch React.lazy on server side and loadable/component support typescript.
- App Shell
  - [App Shell モデル  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/architecture/app-shell?hl=ja)
