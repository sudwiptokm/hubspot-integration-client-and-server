const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const port = process.env.PORTv || 5000;

const token = "pat-na1-eea2bc6a-9531-4cd7-add5-a006df5ff2c3";
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const result = await axios
    .get("https://api.hubapi.com/crm/v3/objects/contacts", { headers })
    .then((res) => res.data);
  res.send(result);
});

app.get("/update", async (req, res) => {
  const email = req.query.email;
  const getContact = `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email&properties=email,fav_food`;

  const result = await axios
    .get(getContact, { headers })
    .then((res) => res.data);
  res.send(result);
});

app.post("/update", async (req, res) => {
  const update = {
    properties: {
      fav_food: req.body.newVal,
    },
  };
  const email = req.query.email;
  const updateContact = `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`;
  await axios.patch(updateContact, update, { headers }).then((res) => res.data);
  res.redirect("back");
});

app.listen(port, () => {
  console.log("Server Running on", port);
});
