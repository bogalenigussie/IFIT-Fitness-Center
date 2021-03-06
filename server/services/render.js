const axios = require("axios");
var moment = require('moment');

// this file allow us to render different files using routers
exports.homeRoutes = (req, res) => {
    //make a get request to /api/users
    axios.get("http://localhost:3000/api/users")
        .then(function(response) {

            res.render("index.ejs", { users: response.data, moment: moment });
        })
        .catch(err => {
            res.send(err);
        })

}
exports.add_user = (req, res) => {
    res.render("add_user.ejs");
}

exports.update_user = (req, res) => {
    axios.get("http://localhost:3000/api/users", { params: { id: req.query.id } })
        .then(function(userdata) {

            res.render("update_user.ejs", { user: userdata.data });

        })
        .catch(err => {
            res.send(err);
        })

}