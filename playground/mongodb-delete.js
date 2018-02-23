const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete one
    // db.collection('Todos').deleteOne({text: 'Summer'}).then((result) =>{
    //     console.log(result);
    // });

    // delete many
    // db.collection('Todos').deleteMany({
    //     text: 'Summer'
    // }).then((result) =>{
    //     console.log(result);
    // });

    // find one and delete it  , return an object of deleted doc
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5a842a59221b47d334a14aa9')
    }).then((result) =>{
        console.log(result);
    });

})