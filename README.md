# BulletinBoard [![Netlify Status](https://api.netlify.com/api/v1/badges/e8658376-160e-4dfd-bd49-0c20b60e4a47/deploy-status)](https://app.netlify.com/sites/bulletinboardd/deploys) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dcf848f155144840a71ed9198b77e16b)](https://www.codacy.com/gh/basilisSam/BulletinBoard/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=basilisSam/BulletinBoard&amp;utm_campaign=Badge_Grade)[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/apavlidi/IT_API/wiki/How-to-contribute)

The front end of the BulletinBoard application. A functional announcement app that you can create/delete/edit announcements to specific category.

## Teck Stack

The project is build with [React](https://reactjs.org/). It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [JSON Server](https://www.npmjs.com/package/json-server) for the backend.

For continuous integration and continuous deployment it uses [Netlify CI/CD](https://www.netlify.com/) and for the deployment [Netlify](https://www.netlify.com/).

### Run it locally

1. Clone the project on your local machine. <br/>
   `$ git clone https://github.com/basilisSam/BulletinBoard.git`

2. Navigate to the project folder and install the dependencies with the following command. <br/>
   `$ yarn install`

3. Run the application locally (the application can be accessed from [localhost:3000](http://localhost:3000/)) <br/>
   `$ yarn dev`

### Available scripts

#### Run app locally

You can run the application locally by using `yarn dev`. This command will spin up the webpack-dev-server and the JSON server by running both commands concurrently.

#### Run react app

You can start the react application by using `yarn start` (you will need the json-server running).

#### Run json-server

You can start the json-server by using `yarn jserver`.

#### Run json-server

You can start the json-server by using `yarn jserver`

#### Build

You can build the application in production mode with `yarn build`

> **Note:** You can use `npm` instead of `yarn`

### Documentation

BulletinBoard documentation is available [here](https://github.com/basilisSam/BulletinBoard/wiki).

### Contributing Guide

Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build to BulletinBoard.
