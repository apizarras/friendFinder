const http = require("http");

const PORT = 4000;

const server = http.createServer(handlRequest);

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

// function displayRoot(url, request, response) {
//     const home = ../public/home.html;
//     response.writeHead(200, {"Content-Type": "text/html});
//     response.end(home);
// };