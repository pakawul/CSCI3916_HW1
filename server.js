const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.text({ type: "*/*" }));

app.post("/", (req, res) => {
  res.status(200).type("text/plain").send(req.body || "");
});


app.get("/", (req, res) => {
  res.status(200).type("text/plain").send("Send a POST request to / to get an echo.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
