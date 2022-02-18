const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense.",
					 "Hard words break no bones, fine words butter no parsnips.",
					 "It is better to deal with problems before they arise.",
           "New ideas could be profitable.",
           "Society prepares the crime; the criminal commits it.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/food", (req, res) => {
  res.status(200).send("You have great taste")
});

app.get("/api/class", (req, res) => {
  res.status(200).send("Welcome guardian.")
});

app.get("/api/subclass", (req, res) => {
  res.status(200).send("Fantastic choice guardian")
});

app.listen(4000, () => console.log("Server running on 4000"));
