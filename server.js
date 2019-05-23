const express = require("express");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(require);
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("app listening at PORT: "+ PORT);
});