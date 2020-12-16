const User = require('../models/user');

exports.userDbcontroller = {
    getUser(req, res) {
        const id = req.params.id
        User.find({ id: id }).
            then(docs => { res.json(docs) })
            .catch(err => console.log('Erorr getting the data from db: ${err}'));
    },
    getUsers(req, res) {
        User.find(req.query)
        .then(docs => { res.json(docs) })
        .catch(err => console.log('Eroor getting the data from db: ${err}'));

    },

    addUser(req, res) {

    },
    updateUser(req, res) {
        var key = req.body.id
        for(i in usersjson)
        {
           if (userDbcontroller[i]["id"] == key){
            userDbcontroller[i]["first_name"] = req.body.first_name
            userDbcontroller[i]["last_name"] = req.body.last_name 
            userDbcontroller[i]["email"] = req.body.email 
            userDbcontroller[i]["gender"] = req.body.gender 
            userDbcontroller[i]["avatar"] = req.body.avatar 
            userDbcontroller[i]["color"] = req.body.color
            userDbcontroller[i]["job"] = req.body.job
               res.send(`User ${key} has been updated`).on('finish');
            }
        }
        res.send("user dose not exiest").on('finish');
    },
    deleteUser(req, res) {
        var key = req.params.id    
        for(i in userDbcontroller){
           if(key == userDbcontroller[i]["id"]){
               delete userDbcontroller[i]
               res.send(`User ${key} has been deleted`).on('finish');
           }
        }
    }
}
