const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/notes-app'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Databases is Connect'))
    .catch(err => console.log(err));