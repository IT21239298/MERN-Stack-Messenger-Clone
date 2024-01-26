const express = require("express");
const bcryptjs = require("bcryptjs");

//create connection
const app = express();
require("./connection");

const Users = require("./models/Users");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome");
  res.end();
});

// registration route
app.post("/api/register", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(400).send("Please fill all required fields");
    } else {
      const isAlreadyExist = await Users.findOne({ email });
      if (isAlreadyExist) {
        res.status(400).send("User already exists");
      } else {
        const newUser = new Users({ fullName, email });
        bcryptjs.hash(password, 10, (err, hashedPassword) => {
          newUser.set("password", hashedPassword);
          newUser.save();
          next();
        });
        console.log("users registered Success..!")
        return res.status(200).send("User registered successfully..!");
        
      }
    }
  } catch (error) {
    console.log(error, "Error");
  }
});
//login 
app.post('/api/login',async(req,res) =>{
  try{
    const {email,password} = req.body;
    if(!email || !password){
      res.status(400).send('Please fill all required field')
    }else{
      
    }


  }catch(error){

  }
})

app.listen(port, () => {
  console.log("listening on port " + port);
});
