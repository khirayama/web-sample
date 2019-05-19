# Web Sample

It is a sample for web application with recent tech stacks. I want to keep making this repository simple and easy understanding.

![Screen Shot](./docs/screenshot.gif)

- Home page(`/`) supports full Server Side Rendering(SSR).
- About page(`/about`) and Users page(`/users`) support dynamic(lazy) import. It does SSR for App Shell part but doesn't support SSR with contents area.

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
- App Features
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

- Make dev environment faster
  - Support Hot Module Replacement
- Setting up jest for snapshot tests

## Why I do so / Why I don't do so

Q. *Why don't I use Atomic Design?*  
A. Actually, it is really difficult to categorize component. If your team still have a solid design system or a team that has only engineers, it is a good sign to use Atomic Design. But if you have to say no, it is a bad sign to do so. Some ideas about design like OOUI have many models like implementation model, meta model, expression model and so on. I can not make sure which component is atoms, which component is molecules, which component is organisms.  

Q. *Why don't I do SSR with dynamic import?*  
A. `@loadable/component` needs [babel plugin](https://www.smooth-code.com/open-source/loadable-components/docs/server-side-rendering/) to do SSR. If I do it, I need to install and set up babel with typescript. Actually, it got easy. But I think it is too much. If you need to support SSR for SEO, please use babel plugin or stop to use dynamic import for target pages. In addition, multi transpile make optimization difficult like needless codes.  

Q. *Why don't I use `ts-node` for development?*  
A. It is too slow for development.  

Q. *How should I handle auth?*
A. It get too big as sample. This link([Redirects(Auth) - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/example/auth-workflow)) will help you.  

## Refs

- React-Router
  - [Basic - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/example/basic)
  - [Server Rendering - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/server-rendering)
  - [Code Splitting - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/code-splitting)
  - [Redux Integration - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/redux-integration)
  - [Redirects(Auth) - React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/example/auth-workflow)
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
    - ReactDOM.renderToString doesn't support React.lazy. So, we can not do SSR with React.lazy now. But @loadable/component needs @loadable/babel-plugin. But it doesn't support typescript. If you want to do SSR on the server with `@loadable/component` and typescript, you have to use babel with typescript.
    - Watch React.lazy on the server side and loadable/component support typescript.
- App Shell
  - [The App Shell Model  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/architecture/app-shell)
