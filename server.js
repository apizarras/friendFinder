const express = require("express");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes.js");
require("./routing/htmlRoutes.js");

app.listen(PORT, function() {
    console.log("app listening at PORT: "+ PORT);
});