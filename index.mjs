import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import router from './Routers/routes.mjs';

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use(cors())
app.use(express.json());


// All API route
app.use('/',router);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
