// Setup empty JS object to act as endpoint for all routes

projectData = {};

const data = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port, () => {
    console.log(`myServer is running on: ${port}`);
});

// app.get('/website/index.html', function (req, res) {
// Add a GET route that returns the projectData object in your server code 
app.get('/website/index.html', function (req, res) {
    console.log(req);
    res.send(projectData);
})


app.get('/all', function (req, res) {
    console.log(data);
    res.send(data);
})

/*
Then, add a POST route that adds incoming data to projectData.
The POST route should anticipate receiving three pieces of data from the request body
- temperature
- date
- user response
Make sure your POST route is setup to add each of these values with a key to projectData.
*/


app.post('/website/index.html', postData);

function postData(req, res) {
    //  console.log("req Body: " + req.body);
    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }

    data.push(newEntry);
    res.send(data);
    // console.log(data);
}