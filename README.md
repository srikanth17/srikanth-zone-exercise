r## Zone Application

This single page application fetches movies from TMDB API & provides filtering for the users.

---

## Getting Started

**Prerequisites** 

1. Install [yarn](https://yarnpkg.com/en/).
2. For macOS users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#mac-stable).
2. For Windows users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#windows-stable). There are several ways to install yarn, you can select one option.

If you have problems in installing *yarn* on your machine, you can also run the application using *npm*. Install [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com). Instead of *yarn* commands below, use *npm* commands like, *npm install*. 

---

## Build & Run the App

Inside the cloned directory, run the following commands.

1. **yarn install**. This will install all the dependencies.
2. **yarn run build-prod**. This will run webpack in production mode.
3. **yarn run serve**. This will run the application on localhost via *live-server* & automatically opens a web browser showing the application running.

## App Walkthrough

Now that you have it running, I would like to explain the architecture of the application. I've used ES6 standard to code this application.

**Webpack**

I've used webpack, a module bundler to run babel & also to build the project. After building, webpack outputs a single JS (bundle.js) file containing all the javascript files & a single CSS (styles.css) containing all the styles.

**Directory Structure**

All the JS code live in */src/* directory. *app.js* is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.     

**Components**

1. App - This is the main component for the application, where the TMDB API is called to fetch the movie list. 
2. GenreList - Renders all genres retrieved from API.
3. MoviesList - Renders the movies depending upon the user actions.

**Assumptions**

1. I've used materialize-css to follow grid layout.
2. I didn't use redux for state management because the components are not multi-tier. So, I've passed it in *props*.
3. Used *axios* to make the API calls.

**Unit Tests**

Test cases are written in */src/tests/*.       

**Styling**

SCSS is used to style the app. I've used bootstrap to import basic styling. Styles live in '*/src/styles*' directory. Compiled into CSS via webpack loaders & separated to a styles.css using '*mini-css-extract-plugin*'.          