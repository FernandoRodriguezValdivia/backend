const userRouter = require('express').Router();
const controller = require('./controllers');

userRouter.get('/get', controller.getUsers);
userRouter.post('/create', controller.postCreate,);
userRouter.post('/signin', controller.postSignIn);
userRouter.patch('/update', controller.postUpdate);

module.exports = userRouter;
