# Neppo - JavaScript Module 2

## How it works?

I use [Node.js](https://nodejs.org) to run the server and JavaScript ES6.

## First steps

### 1. Install [Node.js](https://nodejs.org/en/download/).

### 2. Once Node.js installed, open up the terminal.

### 3. Navigate to the project folder:

```
$ cd frontend-course-module2
```

### 4. And run:

```
$ node server/server.js
```

### 5. And in another terminal finally run:

```
$ npm install
$ npm start
```

You'll have access to the app at `localhost:8080`

## File structure

The basic file structure for the project is organized in the following way:

```
.
|-- client
    |-- app
      |-- css
      |-- images
      |-- js
      |-- views
    |--tests
|-- server
```

## Testsuite

The app uses [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/1.0/index.html) to run the tests located in the `test/` folder. To run the tests:

```
$ npm install
$ npm test
```