const express = require("express");
const bcryptjs = require('bcryptjs');

//create connection 
const app = express();
require("./connection");

const Users = require('./models/Users');

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome");
  res.end();
});

// registration route
app.post('/api/register',async(req, res,next) => {
  try{
    const {fullName,email, password} = req.body;

    if(!fullName || !email || !password) {
      res.status(400).send('Please fill all required fields');
    }else {
      const isAlredyExist = await Users.findOne({email}); 
       if(isAlredyExist) {
        res.status(400).send('User already exits')
       }else{
        const newUser = new Users({fullName, email});
        bcryptjs.hash(password,10,(err,hashedPassword) => {
          newUser.set('password',hashedPassword);
          newUser.save();
          next()
        })
        return res.status(200).send(' Registered Successfully..!');
       }
    }

  }catch(error){

  }
})

app.listen(port, () => {
  console.log("listening on port " + port);
});
