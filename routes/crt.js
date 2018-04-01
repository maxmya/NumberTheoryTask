var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    res.render('crt');


});

router.post('/', function (req, res, next) {

    let a = req.body.a;
    let b = req.body.b;
    let c = req.body.c;
    let m1 = req.body.m1;
    let m2 = req.body.m2;
    let m3 = req.body.m3;





});


function solveModulo(a, b, c, m1, m2, m3) {

};


function egcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
};

module.exports = router;