const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');
/////////////////////////////////////////

const userID = '5a85315e1aea773360d00d5f';
const id = '5a8d07a6aa5e96c06d83d702';

if (!ObjectID.isValid(userID)) {
    console.log('ID not valid');
}
// Todo.find({
//     _id: id
// }).then((todos) => { // return an array of obj
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => { // return an  obj
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => { // return an  obj
//     if (!todo) {
//        return console.log('todo not found');
//     }
//     console.log('Todo', todo)
// }).catch(e => console.log(e));

User.findById(userID).then(user => {
    if (!user) {
        console.log('Unable to find user');
    }
    console.log('user', user);
}).catch(e => console.log(e))