const express = require("express");
const path = require("path");
const http = require("http");

const PORT = 4000;

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("listening on port: "+ PORT);
});

function handleRequest(request, response) {
    const path = req.url;
    switch (path) {
        case "/home":
            return displayRoot(path, request, response);
        case "/survey":
            return displaySurvery(path, request, response);
    };
};