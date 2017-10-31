const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//Remove everything from db
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Find document and remove and return removed doc (in this example todo is a document)
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({ _id: '59f7ca4b30c6a386e1776973' }).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('59f7c88130c6a386e177690f').then((todo) => {
//     console.log(todo);
// });

