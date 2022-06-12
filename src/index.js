const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
var corsOptions = {
    origin: 'https://8d91-190-237-4-94.ngrok.io',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//Routes
app.use('/',require('./routes/routes'));
app.use('/products',require('./routes/products'));

//Server start
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})