var friends = require("../data/friends");
console.log("HOME");

module.exports = function (app) {
    console.log("broke");
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });


    app.post("/api/friends", function (req, res) {
       //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

       
    });
};