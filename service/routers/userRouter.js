const { Router } = require('express');
const {userDbcontroller}= require('../conrollers/user.ctrl');

const userRouter= new Router;

userRouter.get('/', userDbcontroller.getUsers);
userRouter.get('/:id', userDbcontroller.getUser);
userRouter.post('/', userDbcontroller.addUser);
userRouter.put('/:id', userDbcontroller.updateUser);
userRouter.delete('/:id', userDbcontroller.deleteUser);

exports.UserRouter = userRouter;