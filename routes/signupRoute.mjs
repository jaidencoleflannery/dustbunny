import express from 'express';
import add from '../db/models/userModel.mjs';
import signup from '../models/signupModel.mjs';
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
    res.render('signup');
})

signupRouter.post('/', (req, res) => {

    res.send(req.body); // echo the result back (prints to the console)

    const username = JSON.stringify(req.body.Username);
    const password = JSON.stringify(req.body.Password);
    console.log('Username:', username);
    console.log('Password:', password);

    const userObject = new signup(username, password); // This creates an object that the database can ingest via the class stored in /models/userModel.mjs

    console.log(userObject);

    add(userObject); // adds user to database

    res.render('login');
    
})

export { signupRouter };