const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function handleRequest(request, response) {
//     const path = request.url;
//     switch (path) {
//         case "/home":
//             return displayRoot(path, request, response);
//         case "/survey":
//             return displaySurvery(path, request, response);
//     };
// };

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/home.html"));
});

app.listen(PORT, function() {
    console.log("app listening at PORT: "+ PORT);
});