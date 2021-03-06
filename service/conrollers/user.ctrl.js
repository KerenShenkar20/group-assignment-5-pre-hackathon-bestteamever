const User = require('../models/user');

exports.userDbcontroller = {
    getUser(req, res) {
        const id = req.params.id
        User.find({ id: id }).
            then(docs => { res.json(docs) })
            .catch(err => console.log('Erorr getting the data from db: ${err}'));
    },
    getUsers(req, res) {
        let filter= { };
        if('job' in req.query)
            filter.job=req.query.job;
        if('gender' in req.query)
            filter.gender=req.query.gender;
        if('email' in req.query)
            filter.email= req.query.email;
        User.find(filter)
            .then(docs => { res.json(docs) })
            .catch(err => console.log('Error getting the data from db: ${err}'));

    },

    addUser(req, res) {
        const newUser = new User(req.body);
        const result = newUser.save()
            .then(result => {
                if (result) {
                    res.json(result)
        
                }
                else {
                    res.status(404).send("Error saving a user");
                }
            })
            .catch(err => console.log('Error saving the data from db: ${err}'))
        


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
