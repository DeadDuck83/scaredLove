var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        var newPerson = req.body;
        var bestMatch = {};
        var closestMatch = 100;
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].score.length; j++) {
                //compare the code of two arrays in position j
                totalDifference += Math.abs(friends[i].score[j] - newPerson.score[j])
                // find the difference in their value
            }
            if (closestMatch > totalDifference) {
                bestMatch = friends[i];
                closestMatch = totalDifference;
            }
        }
        
        res.json(bestMatch);
    });
};