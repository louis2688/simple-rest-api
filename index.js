const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/message", (req, res) => {
  const { conversation_Id, message } = req.body;

  if (message.includes("hi") || message.includes("hello")) {
    res.send({
      response_Id: conversation_Id,
      message: "welcome to stationFive",
    });
  }

  if (message.includes("goodbye") || message.includes("bye")) {
    res.send({
      response_Id: conversation_Id,
      message: "Thank you See you Around",
    });
  }
  if (!message || message) {
    res.status(404).send({
      message: "Sorry I dont Understand",
    });
  }
});

const sayHi = (req, res) => {
  res.send("Station Five!");
};

app.get("/", sayHi);
