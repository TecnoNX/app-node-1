require('dotenv').config();

const app = require('./server');
require('./DB')

app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
})