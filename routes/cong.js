var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {

    let a = req.body.a;
    let b = req.body.b;
    let m = req.body.m;

    






});
router.get('/', function (req, res, next) {

    res.render('cong')

});

// function to calculate gcd 
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


function linearCongurent(a, b, m) {
    let g = egcd(a, m);
    if (b % g != 0)
        return;
    

}

module.exports = router;