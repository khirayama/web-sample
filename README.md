# Web Sample

It is a sample for web application with recent tech stacks. I want to keep making this repository simple and easy understanding.

![Screen Shot](./docs/screenshot.gif)

- Home page(`/`) supports full Server Side Rendering.
- About page(`/about`) and Users page(`/users`) support dynamic(lazy) import.

## Stacks

- Main Libraries
  - express
  - react
  - react-router
  - redux
  - @loadable/component
  - styled-components
  - react-intl
- Dev Tools
  - webpack
  - typescript
  - eslint
  - prettier
- Features
  - Server Side Rendering
  - i18n
  - Code Splitting

## Getting Started

For development.

```sh
$ npm install
$ npm start
// Open localhost:3000
```

For production.
```sh
$ npm install
$ npm run build
$ npm run server
// Open localhost:3000
```

## Roadmap

- Make dev evn faster
  - Support Hot Module Replacement
- Optimize code splitting

## Architecture Hints and Rules

- About Presentations
  - Use routes from `presentations/templates`
    - It is for smooth transition. If you use templates in pages or other layers, you will get blink with dynamic import.
    - templates is like `AppShell`.
  - Use head from `presentations/pages`
  - Not use pages from `containers` and use pages from `routes`
  - Define async or not in `routes`
    - That means using `@loadable/components` in routes, not in pages

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
