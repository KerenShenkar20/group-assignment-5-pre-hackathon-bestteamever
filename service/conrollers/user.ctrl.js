const User = require('../models/user');

exports.userDbcontroller = {
    getUser(req, res) {
        const id = req.params.id
        User.find({ id: id }).
            then(docs => { res.json(docs) })
            .catch(err => console.log('Eroor getting the data from db: ${err}'));
    },
    getUsers(req, res) {
        User.find(req.query)
        .then(docs => { res.json(docs) })
        .catch(err => console.log('Eroor getting the data from db: ${err}'));

    },

    addUser(req, res) {

    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    }
}
