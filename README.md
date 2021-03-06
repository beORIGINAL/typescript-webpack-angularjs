# TypeScript + Webpack + AngularJS + Node.js
![Background Image Missing](https://github.com/steevehook/typescript-webpack-angularjs/blob/master/assets/img/home/background.png)

#### Get Started:
Make sure you have node installed

If you are using yarn package manager:
1. `$ yarn install` - Install all necessary dependencies
2. `$ yarn start` - Run production ready app
3. `$ yarn serve` - Run development ready app
4. `$ yarn build` - Run project build
5. `$ yarn ntsc` - Run typescript compiler

If you are using npm package manager:
1. `$ npm install` - Install all necessary dependencies
2. `$ npm start` - Run production ready app
3. `$ npm run serve` - Run development ready app
4. `$ npm run build` - Run project build
5. `$ npm run ntsc` - Run typescript compiler

open  `http://localhost:3000` to run the app in the browser

---
> For live version of the app please visit:
[TypeScript + Webpack + AngularJS - Steve Hook](http://typescript-webpack-angularjs.herokuapp.com/).
---

#### List of project features:
- Angular 1.6 `component` based architecture using Typescript
- `Typescript` out of the box
- `Webpack` module bundler
- Node.js `express`, for serving the app + Node.js TypeScript example
- `Stateful`, `stateless` and `routed` components
- One-way data flow
- Lifecycle hooks
- `Bootstrap 4 beta`
- Custom code highlighter component
- Module `ui-router`, for routed components
- Module `ngAnimate`, for angular application events
- CSS library `animate.css`, for handling basics animations
- Built against Todd Motto's component architecture [styleguide](https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript)
- Proper SCSS architecture to provide maintainable, scalable and well-organized code

#### Project Structure
```
├── src/
│   ├── index.html
│   ├── index.ts
│   ├── app/
│   │   ├── @types/
│   │   │    └── require.d.ts
│   │   ├── core/
│   │   │    └── core.module.ts
│   │   ├── components/
│   │   │    ├── home/
│   │   │    │     ├── home.module.ts
│   │   │    │     ├── home.component.ts
│   │   │    │     ├── home.controller.ts
│   │   │    │     ├── home.html
│   │   │    │     └── home.scss
│   │   │    ├── playground/
│   │   │    │     ├── playground.module.ts
│   │   │    │     ├── playground.component.ts
│   │   │    │     ├── playground.service.ts
│   │   │    │     ├── playground.html
│   │   │    │     ├── playground.scss
│   │   │    │     └── topics/
│   │   │    │           ├── topics.module.ts
│   │   │    │           ├── topics.scss
│   │   │    │           ├── advanced-types/
│   │   │    │           │   ├── advanced-types.module.ts
│   │   │    │           │   ├── advanced-types.component.ts
│   │   │    │           │   ├── advanced-types.controller.ts
│   │   │    │           │   ├── advanced-types.html
│   │   │    │           │   └── advanced-types.scss
│   │   │    │           ├── basic-types/
│   │   │    │           │   ├── basic-types.module.ts
│   │   │    │           │   ├── basic-types.component.ts
│   │   │    │           │   ├── basic-types.controller.ts
│   │   │    │           │   ├── basic-types.html
│   │   │    │           │   └── basic-types.scss
│   │   │    │           ├── classes/
│   │   │    │           │   ├── classes.module.ts
│   │   │    │           │   ├── classes.component.ts
│   │   │    │           │   ├── classes.controller.ts
│   │   │    │           │   ├── classes.html
│   │   │    │           │   └── classes.scss
│   │   │    │           ├── declaration-files/
│   │   │    │           │   ├── declaration-files.module.ts
│   │   │    │           │   ├── declaration-files.component.ts
│   │   │    │           │   ├── declaration-files.controller.ts
│   │   │    │           │   ├── declaration-files.html
│   │   │    │           │   └── declaration-files.scss
│   │   │    │           ├── declaration-merging/
│   │   │    │           │   ├── declaration-merging.module.ts
│   │   │    │           │   ├── declaration-merging.component.ts
│   │   │    │           │   ├── declaration-merging.controller.ts
│   │   │    │           │   ├── declaration-merging.html
│   │   │    │           │   └── declaration-merging.scss
│   │   │    │           ├── decorators/
│   │   │    │           │   ├── decorators.module.ts
│   │   │    │           │   ├── decorators.component.ts
│   │   │    │           │   ├── decorators.controller.ts
│   │   │    │           │   ├── decorators.html
│   │   │    │           │   └── decorators.scss
│   │   │    │           ├── enums/
│   │   │    │           │   ├── enums.module.ts
│   │   │    │           │   ├── enums.component.ts
│   │   │    │           │   ├── enums.controller.ts
│   │   │    │           │   ├── enums.html
│   │   │    │           │   └── enums.scss
│   │   │    │           ├── functions/
│   │   │    │           │   ├── functions.module.ts
│   │   │    │           │   ├── functions.component.ts
│   │   │    │           │   ├── functions.controller.ts
│   │   │    │           │   ├── functions.html
│   │   │    │           │   └── functions.scss
│   │   │    │           ├── generics/
│   │   │    │           │   ├── generics.module.ts
│   │   │    │           │   ├── generics.component.ts
│   │   │    │           │   ├── generics.controller.ts
│   │   │    │           │   ├── generics.html
│   │   │    │           │   └── generics.scss
│   │   │    │           ├── interfaces/
│   │   │    │           │   ├── interfaces.module.ts
│   │   │    │           │   ├── interfaces.compoenent.ts
│   │   │    │           │   ├── interfaces.controller.ts
│   │   │    │           │   ├── interfaces.html
│   │   │    │           │   └── interfaces.scss
│   │   │    │           ├── iterators-and-generators/
│   │   │    │           │   ├── iterators-and-generators.module.ts
│   │   │    │           │   ├── iterators-and-generators.component.ts
│   │   │    │           │   ├── iterators-and-generators.controller.ts
│   │   │    │           │   ├── iterators-and-generators.html
│   │   │    │           │   └── iterators-and-generators.scss
│   │   │    │           ├── mixins/
│   │   │    │           │   ├── mixins.module.ts
│   │   │    │           │   ├── mixins.component.ts
│   │   │    │           │   ├── mixins.controller.ts
│   │   │    │           │   ├── mixins.html
│   │   │    │           │   └── mixins.scss
│   │   │    │           ├── module-resolution/
│   │   │    │           │   ├── module-resolution.module.ts
│   │   │    │           │   ├── module-resolution.component.ts
│   │   │    │           │   ├── module-resolution.controller.ts
│   │   │    │           │   ├── module-resolution.html
│   │   │    │           │   └── module-resolution.scss
│   │   │    │           ├── modules/
│   │   │    │           │   ├── modules.module.ts
│   │   │    │           │   ├── modules.component.ts
│   │   │    │           │   ├── modules.controller.ts
│   │   │    │           │   ├── modules.html
│   │   │    │           │   └── modules.scss
│   │   │    │           ├── namespaces/
│   │   │    │           │   ├── namespaces.module.ts
│   │   │    │           │   ├── namespaces.component.ts
│   │   │    │           │   ├── namespaces.controller.ts
│   │   │    │           │   ├── namespaces.html
│   │   │    │           │   └── namespaces.scss
│   │   │    │           ├── namespaces-and-modules/
│   │   │    │           │   ├── namespaces-and-modules.module.ts
│   │   │    │           │   ├── namespaces-and-modules.component.ts
│   │   │    │           │   ├── namespaces-and-modules.controller.ts
│   │   │    │           │   ├── namespaces-and-modules.html
│   │   │    │           │   └── namespaces-and-modules.scss
│   │   │    │           ├── symbols/
│   │   │    │           │   ├── symbols.module.ts
│   │   │    │           │   ├── symbols.component.ts
│   │   │    │           │   ├── symbols.controller.ts
│   │   │    │           │   ├── symbols.html
│   │   │    │           │   └── symbols.scss
│   │   │    │           ├── triple-slash-directives/
│   │   │    │           │   ├── triple-slash-directives.module.ts
│   │   │    │           │   ├── triple-slash-directives.component.ts
│   │   │    │           │   ├── triple-slash-directives.controller.ts
│   │   │    │           │   ├── triple-slash-directives.html
│   │   │    │           │   └── triple-slash-directives.scss
│   │   │    │           ├── type-compatibility/
│   │   │    │           │   ├── type-compatibility.module.ts
│   │   │    │           │   ├── type-compatibility.component.ts
│   │   │    │           │   ├── type-compatibility.controller.ts
│   │   │    │           │   ├── type-compatibility.html
│   │   │    │           │   └── type-compatibility.scss
│   │   │    │           ├── type-inference/
│   │   │    │           │   ├── type-inference.module.ts
│   │   │    │           │   ├── type-inference.component.ts
│   │   │    │           │   ├── type-inference.controller.ts
│   │   │    │           │   ├── type-inference.html
│   │   │    │           │   └── type-inference.scss
│   │   │    │           ├── variable-declarations/
│   │   │    │           │   ├── variable-declarations.module.ts
│   │   │    │           │   ├── variable-declarations.component.ts
│   │   │    │           │   ├── variable-declarations.controller.ts
│   │   │    │           │   ├── variable-declarations.html
│   │   │    │           └── └── variable-declarations.scss
│   │   │    ├── real-world/
│   │   │    │     ├── real-world.module.ts
│   │   │    │     ├── real-world.component.ts
│   │   │    │     ├── real-world.controller.ts
│   │   │    │     ├── real-world.service.ts
│   │   │    │     ├── real-world.html
│   │   │    │     ├── real-world.scss
│   │   │    │     ├── rates/
│   │   │    │     │   ├── rates.module.ts
│   │   │    │     │   ├── rates.component.ts
│   │   │    │     │   ├── rates.controller.ts
│   │   │    │     │   ├── rates.service.ts
│   │   │    │     │   ├── rates.html
│   │   │    │     ├── └── rates.scss
│   │   │    │     ├── todos/
│   │   │    │     │   ├── todos.module.ts
│   │   │    │     │   ├── todos.component.ts
│   │   │    │     │   ├── todos.controller.ts
│   │   │    │     │   ├── todos.service.ts
│   │   │    │     │   ├── todos.html
│   │   │    │     └── └── todos.scss
│   │   │    ├── components.module.ts
│   │   │    ├── components.scss
│   │   │    └── IWorkshop.ts
│   │   ├── common/
│   │   │    ├── navigation/
│   │   │    │     ├── navigation.module.ts
│   │   │    │     ├── navigation.component.ts
│   │   │    │     ├── navigation.controller.ts
│   │   │    │     ├── navigation.html
│   │   │    │     └── navigation.scss
│   │   │    ├── copyright/
│   │   │    │     ├── copyright.module.ts
│   │   │    │     ├── copyright.component.ts
│   │   │    │     ├── copyright.controller.ts
│   │   │    │     ├── copyright.html
│   │   │    │     └── copyright.scss
│   │   │    ├── highlighter/
│   │   │    │     ├── highlighter.module.ts
│   │   │    │     ├── highlighter.component.ts
│   │   │    │     ├── highlighter.controller.ts
│   │   │    │     ├── highlighter.directive.ts
│   │   │    │     ├── highlighter.html
│   │   │    │     └── highlighter.scss
│   │   │    ├── logger/
│   │   │    │     ├── logger.module.ts
│   │   │    │     ├── logger.component.ts
│   │   │    │     ├── logger.controller.ts
│   │   │    │     ├── logger.html
│   │   │    │     └── logger.scss
│   │   │    ├── loader/
│   │   │    │     ├── loader.module.ts
│   │   │    │     ├── loader.component.ts
│   │   │    │     ├── loader.controller.ts
│   │   │    │     ├── loader.directive.ts
│   │   │    │     ├── ILoaderStatus.ts
│   │   │    │     ├── loader.html
│   │   │    │     └── loader.scss
│   │   │    └── common.module.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.service.ts
│   │   ├── app.config.ts
│   │   ├── ITopic.ts
│   │   └── app.scss
│   └──
│
├── assets/
│   ├── fonts
│   │   ├── julius-sans-one/
│   │   │     ├── julius-sans-one.eot
│   │   │     ├── julius-sans-one.ttf
│   │   │     └── julius-sans-one.woff 
│   ├── img
│   │   ├── home/
│   │   │     ├── background.png
│   │   │     ├── play.svg
│   │   │     └── real.svg
│   │   ├── navigation/
│   │   │     └── ts.svg
│   ├── styles
│   │   ├── base/
│   │   │     ├── _colors.scss
│   │   │     └── _typography.scss 
│   │   ├── mixins/
│   │   │     ├── _border-radius.scss
│   │   │     └── _image-responsive-centered.scss
│   │   ├── utils/
│   │   │     └── _image-responsive.scss
│   │   └── 
│   └──
└──
```

---
> For more information on application structure and style guide, please check out this convention
[Angular 1.x style guide (TypeScript) - Todd Motto](https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript).
---
> For another project architecture please check out this example
[AngularJS 1.5 component architecture app - Todd Motto](https://github.com/toddmotto/angular-1-5-components-app/tree/ES2015).
---

> For differences between TypeScript and Flow have a look here
[Flowtype vs TypeScript](https://gist.github.com/niieani/af8a8c8b572268551e5a3a1fc0c6bdca).
---