const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/api/feedback", function (req, res) {
  res.json({"test": "test"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  const env = `${process.env.NODE_ENV || "development"}`;
  console.log(`App listening on port ${PORT}`);
  console.log(`App listening on env ${env}`);
  console.log(`Press Ctrl+C to quit.`);
});
