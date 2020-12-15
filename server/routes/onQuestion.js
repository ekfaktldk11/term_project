var express = require('express');
var router = express.Router();
var cors = require('cors');

const Quest = require('../models/question');



router.get('/', cors(), function (req, res, next) {
    Quest.find({}).then((data) => {
        console.log(data);
        res.json(data);
    })
});

// router.get('/remove',cors(), function(req, res, next){
//     console.log("Data remove");
//     Quest.remove({});
// })

module.exports = router;