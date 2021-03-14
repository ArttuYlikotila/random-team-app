# Random Team App

This React SPA-application loads 20 random fake person profiles
from the Random User API. After profiles have been loaded, user
can divide the persons to two evenly sized random teams.

This app is made with Create React App.

Styling is made with Bootstrap 4 and custom CSS.

## Installation

### Pre-requisites:

You need Node and NPM installed on your computer.

### Procedure:

1. Clone or download this repository

2. Open a terminal in the root directory of the repository and run command `npm install`

3. To start the app, run command `npm start` in the terminal at the root directory

A local version of the app will start running in http://localhost:3000

## Running tests

### Pre-requisites:

You need a local installation of the app on your computer.

### Unit & integration tests

1. Open a terminal in the root directory of the repository and run command `npm test`

After the tests have ran, you can terminate the job by pressing `control + c`

#### To get test coverage report:

1. Open a terminal in the root directory of the repository and run command `npm run coverage`

After the tests have ran, you can terminate the job by pressing `control + c`

### End 2 end tests

For end 2 end tests with Cypress you need two terminals open at the same time. One starts the app and the another runs Cypress.

1. Open a terminal in the root directory of the repository and run command `npm start` to start the app

2. Open another terminal in the root directory of the repository and run command `npm run cypress:open`

3. A new window will open. Click on the `Run 1 integration spec`

New browser will open where the tests will be ran. After the tests you can close the two previously openeded windows to stop Cypress running.

#### To run e2e test in terminal:

1. Open a terminal in the root directory of the repository and run command `npm start` to start the app

2. Open another terminal in the root directory of the repository and run command `npm run cypress:headless` to run e2e tests
