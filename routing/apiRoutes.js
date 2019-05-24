const path = require("path");
const friends = require("../app/data/friends");
console.log(friends);

module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.send(friends);
        response.json(friends);
    });
    app.post("/api/friends", function(request, response) {
        
        const user = request.body;

        for(i=0;i<user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var minMatchFactor = 50;
        var matchIndex = 0;

        for(i=0;i<friends.length; i++) {
            let totalDifference = 0;

            for(j=0;j<friends[i].scores.length; j++) {
                let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            if(totalDifference<minMatchFactor) {
                matchIndex = i;
                minMatchFactor = totalDifference;
            }
        };
        friends.push(user);
        response.json(friends[matchIndex]);
    });
};