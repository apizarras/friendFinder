const path = require("path");

module.exports = function(app) {
    app.get("/friends", function(request, response) {
        response.sendFile(path.join(__dirname, "../app/data/friends.js"));
    });
}