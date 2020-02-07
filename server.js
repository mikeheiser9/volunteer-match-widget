const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// require("./routes/testRoute.js")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(PORT);

console.log('App is listening on port ' + PORT);