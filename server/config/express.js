const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
var cookieParser = require('cookie-parser');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
            next();
        });

    } else {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());


    app.use(cookieParser());

    app.use('/api', require('../app/routers/index.route'));

    app.use('/image', express.static(path.join(__dirname, './../images')));

    app.use(express.static(path.join(__dirname, './../../views/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './../../views/dist/index.html'));
    });

    return app;
}