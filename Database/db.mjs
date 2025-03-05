import mongoose from "mongoose";

const Connection = async (username, password) => {
    const databaseName = "digital-dairy";  // Replace with your actual DB name
    const URL = `mongodb+srv://${username}:${password}@digital-diary.5fhci.mongodb.net/?retryWrites=true&w=majority&appName=digital-diary`;
    

    try {
        await mongoose.connect(URL);
        console.log(`Database "${databaseName}" connected successfully`);
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
};


export default Connection;