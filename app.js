const express = require("express");
const app = express();
const config = require("./config");
app.listen(config.server.port, function () {
    console.log("Listening on port: " + config.server.port + ".");
});