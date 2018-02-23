const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });
    
    newTodo.save().then(
        (doc) => {
            res.send(doc)
        },
        (e) => {
            res.status(400).send(e)
        }
    )
});

app.get('/todos', (req, res) => {
    Todo.find().then(
     (todos) => {
         res.send({todos})
     }
    ).catch((e) => res.status(400).send(e));
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) { // not valid id using isValid
        return res.status(404).send(); 
    }
    
    Todo.findById(id).then((todo) => { // success
        if (!todo) { // no todo
            return res.status(404).send();
        }
        res.send({todo});  // find todo
    }).catch(e => res.send(e)); 

})

app.listen(port, () => {
    console.log(`Started at port ${port}`);
});

module.exports = {app}; 
