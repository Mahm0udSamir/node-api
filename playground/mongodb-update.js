const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a828853fd62ea54446fe76c')
    }, {
        $set: {name: 'Ahmed'},
        $inc: { age: 1 }
    }).then((result) =>{
        console.log(result);
    });

})