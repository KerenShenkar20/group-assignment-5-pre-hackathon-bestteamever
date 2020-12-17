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
        const user = new User(req.body);
        const result = newUser.save();
        if (result) {
            res.json(result)
        }
        else {
            res.status(404).send("Error saving a user");
        }


    },
    updateUser(req, res) {
        User.updateOne({ id: req.params.id }, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            avatar: req.body.avatar,
            color: req.body.color,
            job: req.body.job
        })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error update user from db : ${req.params.id}`));
    },
    deleteUser(req, res) {
        User.deleteOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting user from db : ${req.params.id}`));
    }
}
