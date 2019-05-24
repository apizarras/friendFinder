const path = require("path");
const friends = require("../app/data/friends");
console.log(friends);

module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.send(friends);
    });
    app.post("/api/friends", function(request, response) {
        friends.push(request.body);
    });
    app.get("/api/match",function(req,res){
        var minMatchFactor = 50;
        var matchIndex = -1;
  
          //loop through the array of objects and match the last object's answers with all other
          //objects to find the closest match
          for(var i =0;i<FRIENDS.length-1;i++){
  
              //we get the sum of absolute differences between two users' answers for each question
              matchFactor = 
              Math.abs(friends[friends.length-1].answers[0] - friends[i].answers[0])+
              Math.abs(friends[friends.length-1].answers[1] - friends[i].answers[1])+
              Math.abs(friends[friends.length-1].answers[2] - friends[i].answers[2])+
              Math.abs(friends[friends.length-1].answers[3] - friends[i].answers[3])+
              Math.abs(friends[friends.length-1].answers[4] - friends[i].answers[4])+
              Math.abs(friends[friends.length-1].answers[5] - friends[i].answers[5])+
              Math.abs(friends[friends.length-1].answers[6] - friends[i].answers[6])+
              Math.abs(friends[friends.length-1].answers[7] - friends[i].answers[7])+
              Math.abs(friends[friends.length-1].answers[8] - friends[i].answers[8])

              //get the minimum matchFactor
              if(minMatchFactor >= matchFactor){
                  minMatchFactor = matchFactor;
                  matchIndex = i;
              }
          }
          //return the response with the closest matched object from the array
          res.send(friends[matchIndex]);
      });
};



