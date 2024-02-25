const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  const env = `${process.env.NODE_ENV || "development"}`;
  console.log(`App listening on port ${PORT}`);
  console.log(`App listening on env ${env}`);
  console.log(`Press Ctrl+C to quit.`);
});
