const fileUpload = require('express-fileupload');
const request = require('./../../config/request');

exports.upload = function(req, res) {

    let fileCount = req.files.files.length;
    let file = [];

    if ((fileCount) && (fileCount > 0)) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            file.push({
                value: req.files.files[i].data,
                options: {
                    filename: req.files.files[i].name,
                    contentType: req.files.files[i].mimetype
                }
            });
        }
    } else if (req.files) {
        file.push({
            value: req.files.files.data,
            options: {
                filename: req.files.files.name,
                contentType: req.files.files.mimetype
            }
        });
    }

    let formData = {
        files: file
    };


    let options = {
        url: 'http://localhost:3100/api/upload',
        formData: formData
    }

    request.post(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    })
};

exports.view64 = function(req, res) {

    request.get('http://localhost:3100/attachment/201709/1505363633030.jpg', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
            res.send(data);
        }
    });

};

exports.view = function(req, res) {

    request.get('http://localhost:3100/attachment/201709/1505363633030.jpg', function(error, response, body) {
        res.setHeader('content-type', response.headers["content-type"])
        res.send(body);
    });

};