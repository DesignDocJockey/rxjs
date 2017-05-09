
## Initial Setup

1.Create package.json
  - npm init
  
2.Install RxJs
  - npm install rxjs --save
  
3.Install Webpack Transpiler & Webpack Dev Server& TypeScript Compiler
 - npm install webpack webpack-dev-server typescript typings ts-loader --save-dev

3a.Install typings tool NPM package Globall (Had to do this in order to create the Type Definitions File)
  - npm install typings --global

4.Install the type defintion file (Creates the typings.json)
  - typings install dt~es6-shim -global -save
