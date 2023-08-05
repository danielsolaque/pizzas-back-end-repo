//Importing all dotenv package to the const dotenv.
const dotenv = require('dotenv')

//load the env to the server
dotenv.config()

// Importing all express package to the const express.
const express = require('express');

const cors = require('cors'); // Import the cors package

//"file system" allow us interact with the file system in this case is (pizza.json)
const fs = require('fs');

//Creating my aplication
const app = express();

// Using the cors middleware
app.use(cors());

const PORT = process.env.PORT || 8888;

// Allow to my server read data from json. 
app.use(express.json());


//Protocolo http first Verb.

// Health check route
//when request
app.get('/', (req, res) => { //==
  res.json({ data: 'Service is running!' });
});



//Request and responses are objects that are generated once the client access to the route pre-define.
app.get('/items', (req, res) => {
    const pizzas = fs.readFileSync('pizzas.json')
    const parsePizzas = JSON.parse(pizzas)
    res.json({ data: parsePizzas });
})


//Mike you can test the error at the front end uncommenting this code: 

// app.get("/items", (req, res) => {
//   res.status(500).json({ error: "Server Error" });
// });


app.get('/items/:id', (req, res) => {
    const id = req.params.id //params allow us to get the values sent by the user through the Url + params is a property of the request object.

    const pizzas = fs.readFileSync('pizzas.json')
    const parsePizzas = JSON.parse(pizzas)

    const found = parsePizzas.find((pizza) => pizza.id === id)
    if (!found) {
        res.status(404).json({ error: 'Id not found' })
    } else {
        res.json({ data: found }) ///by default express response with a 200 status code.
    }
})


app.listen(PORT,() => console.log ('listening') )

