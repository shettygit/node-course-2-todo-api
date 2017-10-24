// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Shop at Whole Foods',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo record.', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Sri Shetty',
    //     age: 40,
    //     location: 'Toronto'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user record.', err);
    //     }
    //     // print timestamp from _id object ID.
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});