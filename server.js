const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use("/Assets/img", express.static(__dirname + "/assets/img"));

app.get("/", function(req, res) {
    console.log("Index Loaded");
    res.json("Bot started!");
});
app.listen(port, function() {
    console.log("Server is Live");
})