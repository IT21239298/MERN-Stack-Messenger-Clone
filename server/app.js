const express = require("express");

//create connection 
const app = express();

require("./connection");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome");
  res.end();
});

app.post('api/register',async(req, res) => {
  try{
    const {fullName,email, password} = req.body;

    if(!fullName || !email || !passowrd) {
      res.status(400).send('Please fill all required fields');
    }else {
      const isAlredyExist = await Users.findOne({email}); 
       if(isAlredyExist) {
        res.status(400).send('User already exits')
       }else{
        const newUser = new Users({fullName, email})
       }
    }

  }catch(error){

  }
})

app.listen(port, () => {
  console.log("listening on port " + port);
});
