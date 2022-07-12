var path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression());
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "checklist")));
app.get("/", function (req, res) {
  res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "checklist", "index.html"));
});
app.listen(port, function (err) {
  if (err) {
    throw new Error(err);
  }
  console.log("Listening on port http://localhost:" + port);
});
