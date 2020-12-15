var express = require('express');
var router = express.Router();
var cors = require('cors');

const Quest = require('../models/question');

router.post('/', cors(), function (req, res, next) {
    if (req.body.yesNo === 'O') {
        console.log("true checked");
        Quest.findByIdAndUpdate(req.body.idQ, { selected: true }, (err, result) => {
            if (err) console.log(err);
            else {
                console.log(result);
            }
        })
    } else {
        Quest.findByIdAndUpdate(req.body.idQ, { selected: false }, (err, result) => {
            if (err) console.log(err);
            else {
                console.log(result);
            }
        })
    }
});

module.exports = router;