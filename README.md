Create a frontend app that consumes data from a JSON-based API and then displays that data to the end-user. Data is from a JSON text file. 

- Queries dummy data from NPM server and displays this in a React App with checkboxes to filter data list.
- Screenshot - https://imgur.com/z9NRQzG

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

First navigate to the ./client directory. Uses Jest and Enzyme for testing. Launches the test runner in the interactive watch mode.<br>

## How to Run

These instructions will get you a copy of the project up and running on your local machine to check it out. 

- Clone repository
- Go to project directory in terminal
- npm install 
- node server.js (Start server)
- go to ./client directory in terminal
- npm run start (Start App)
- App should then pop up in your broswer

## Notes

- Dummy data from mockaroo.
- Static JSON file 'data.json' simulates database.
- Ticking "men" and "women" checkbox filters data reactively.

## Built With

* [React](https://reactjs.org/) 
* [Node](https://nodejs.org/en/)
* [Material-UI](https://material-ui.com/)
* [Jest](https://jestjs.io/en/)
8 [Enzyme](https://github.com/airbnb/enzyme) 

## Authors

* **Jaren Lynch** - [JarenL](https://github.com/JarenL)