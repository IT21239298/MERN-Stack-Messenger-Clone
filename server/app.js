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

  }catch(error){
    
  }
})

app.listen(port, () => {
  console.log("listening on port " + port);
});
