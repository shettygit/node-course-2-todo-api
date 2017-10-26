var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true,
    /* other options */
});

module.exports = { mongoose };