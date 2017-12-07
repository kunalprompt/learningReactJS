# Steps

## 1. Getting started with Node and NPM (Node Package Manager)

Google for the installation of the Node and NPM, and it should be easy to install these.


## 2. Starting with App/Project

Creating `package.json`

This is the file which works as the version manager of the dependencies of the project that we are building.

```npm init```


## 3. Installing various required packages

We need to install packages like `babel-core`, `babel-loader` etc. You can read about the importance of these packages.

```npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react```

## 4. Getting started with ReactJs

```npm install --save-dev react react-dom```

## 5. Configuring Webpack and Babel

Read about Webpack and Babel online. The two important files for reference here are `webpack.config.js` and `.babelrc`.

Make sure before configuring webpack you have it installed.

```npm install --save-dev webpack webpack-dev-server```

## 6. Creating simple "Hello React" App

See `source/index.jsx` file here. We need to create this file. We also need to create `dest/` folder here.

## 7. Creating HTML source code

See `html/index.html` for reference. Please read about how to include ReactJs application in HTML pages.

## 8. Starting the app

If you have noticed `package.json` file, you will come to know about "script" section there which indicates about how to bundle and build ReactJS and JSX.

----------------

**Note** - To continuously test UI when code is changed on update React JS App, we need a server which hot reloads the changes and those changes are reflected on HTML page, that's where `webpack-dev-server` comes for help. Please refer to `package.json` to know more about this. Have a look at `publicPath` configuration in `webpack.config.js` file. This configuration will be used by `webpack-dev-server` to hold the bundled files.

Remember `webpack-dev-server` stores the compiled bundle in memory, thus the old copy remains in the file system. `webpack-dev-server` reads `output.publicPath` in the `webpack.config.js` file. Whenever browser sends a request to get file under that path, it tries to return the compiled bundle.

Read about how ReactJs render elements at https://reactjs.org/docs/rendering-elements.html
