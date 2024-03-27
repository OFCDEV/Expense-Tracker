const express = require('express');
const cors = require('cors');
const {db} = require('./db/db');
const {readdirSync} = require('fs'); //To read directory
const app = express();

require('dotenv').config()

const PORT = process.env.PORT;

//middlewares
app.use(express.json()) //Because we want our data in JSON
app.use(cors())//We use CORS so we dont have any problem accessing our domain

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))
//This line reads files from routes folder and map them.

const server = ()=>{
    //Connecting database
    db()
    //console.log(`You are listening to port ${PORT}`);
    app.listen(PORT,()=>{
        console.log(`App is running on http://localhost:${PORT}`);
    })
}

server()