const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//create connection
const app = express();
require("./connection");

const Users = require("./models/Users");
const Conversations = require("./models/Conversation");
const Messages = require("./models/Messages");

const { use } = require("passport");

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
        console.log("users registered Success..!");
        return res.status(200).send("User registered successfully..!");
      }
    }
  } catch (error) {
    console.log(error, "Error");
  }
});
//login
app.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please fill all required field");
    } else {
      const user = await Users.findOne({ email });
      if (!user) {
        res.status(400).send("User email or password is incorrect");
      } else {
        const validateUser = await bcryptjs.compare(password, user.password);
        if (!validateUser) {
          res.status(400).send("User email or password is incorect");
        } else {
          const payload = {
            userId: user._id,
            email: user.email,
          };
          const JWT_SECRET_KEY =
            process.env.JWT_SECRET_KEY || "THIS_IS_A_JWT_SECRET_KEY";

          jwt.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: 84600 },
            async (err, token) => {
              await Users.updateOne(
                { _id: user._id },
                {
                  $set: { token },
                }
              );
              user.save();
              next();
            }
          );
          res.status(200).json({
            user: { email: user.email, fullName: user.fullName },
            token: user.token,
          });
        }
      }
    }
  } catch (error) {
    console.log(error, " login Error");
  }
});

// post conversation
app.post("/api/conversation", async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = new Conversations({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    res.status(200).send("Conversation created Successfully..!");
  } catch (error) {
    console.log(error, "Error");
  }
});

// get conversation
app.get("/api/conversation/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const conversations = await Conversations.find({
      members: { $in: [userId] },
    });
    const conversationUserData = Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = conversation.members.find(
          (member) => member !== userId
        );
        const user = await Users.findById(receiverId);
        return {
          user: {
            receiverId: user._id,
            email: user.email,
            fullName: user.fullName,
          },
          conversationId: conversation._id,
        };
      })
    );
    res.status(200).json(await conversationUserData);
  } catch (error) {
    console.log(error, "Error");
  }
});
//post message
app.post("/api/message", async (req, res) => {
  try {
    const { conversationId, senderId, message } = req.body;
    const newMessage = new Messages({ conversationId, senderId, message });
    await newMessage.save();
    res.status(200).send("Message sent Successfuly...!");
  } catch (error) {
    console.log(error, "Error");
  }
});

//get message only users and messsage 
app.get("/api/message/:conversationId", async (req, res) => {
  try {
    const conversationId = req.params.conversationId;
    const messages = await Messages.find({ conversationId });
    const messageUserData = Promise.all(messages.map(async(message) => {
      const user  = await Users.findById(message.senderId);
      return {user: {email:user.email, fullName: user.fullName}, message:message.message}
    }))

    res.status(200).json( await messageUserData);
  } catch (error) {
    console.log("Error", error);
  }
});

//get users
app.get('/api/users',async (req,res) => {
  try{
    const users= await Users.find();
    

  }catch(error){
        console.log("Error",error)
  }
})

app.listen(port, () => {
  console.log("listening on port " + port);
});
