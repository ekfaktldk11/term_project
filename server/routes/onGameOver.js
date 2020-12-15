var express = require('express');
var router = express.Router();
var cors = require('cors');

const Quest = require('../models/question');


router.get('/', cors(), function (req, res, next) {
    Quest.find({ selected: true }).then((list) => {
        console.log(list);
        let Onum = 0;
        let Anum = 0;
        let Bnum = 0;
        let ABnum = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].selected === true) {
                console.log(list[i].bloodType);
                switch (list[i].bloodType) {
                    case 'A':
                        Anum++;
                        break;
                    case 'B':
                        Bnum++;
                        break;
                    case 'O':
                        Onum++;
                        break;
                    case 'AB':
                        ABnum++;
                        break;
                    default:
                }
            }
        }
        // A, B, O, AB 순
    let arr = [Anum, Bnum, Onum, ABnum];
    console.log(arr);
    let max = arr[0];
    console.log(max);
    let maxIndex = 0;
    console.log(maxIndex);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    console.log(maxIndex);
    let highScore;
    switch (maxIndex) {
        case 0:
            highScore = 'A';
            break;
        case 1:
            highScore = 'B';
            break;
        case 2:
            highScore = 'O';
            break;
        case 3:
            highScore = 'AB';
            break;
        default:
            highScore = 'A';
    }
    res.send(highScore);
    });
});


router.get('/remove',cors(), function(req, res, next){
    console.log("Data remove");
    Quest.remove({}).then(result => {
        console.log(result);
    });
})

module.exports = router;