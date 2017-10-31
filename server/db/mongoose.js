var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true,
    /* other options */
});

module.exports = { mongoose };