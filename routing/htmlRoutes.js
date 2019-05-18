const http = require("http");

const PORT = 4000;

const server = http.createServer(handlRequest);

server.listen(PORT, function() {
    console.log("listening on port: "+ PORT);
});

function handleRequest(request, response) {
    const paht = req.url;
    switch (path) {
        case "/home":
            return displayRoot(path, request, response);
        case "/survey":
            return displaySurvery(path, request, response);
    }
}