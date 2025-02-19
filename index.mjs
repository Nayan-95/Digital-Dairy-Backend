import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import router from './Routers/routes.mjs';
import Connection from './Database/db.mjs';

dotenv.config();

const app = express();

const port = process.env.PORT; 
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.use(cors())
app.use(express.json());


// All API route
app.use('/',router);


// db connection
Connection(username, password);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
