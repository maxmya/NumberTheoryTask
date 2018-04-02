var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {

    let a = req.body.a;
    let b = req.body.b;
    let m = req.body.m;

    let mSol = linearCongurent(a, b, m);
    res.render('cong', {
        sol: mSol
    })







});
router.get('/', function (req, res, next) {

    res.render('cong', {
        sol: ''
    })

});

// function to calculate gcd 
function egcd(m, n) {
    if (n == 0) return m;
    return egcd(n, m % n);
}

function linearCongurent(a, b, m) {
    let g = egcd(a, m);
    if (b % g != 0) {
        return "b and g are not coprimes";
    }
    let sol = [];
    for (let i = 0; i < m - 1; i++) {
        if ((a * i) % m == (b % m))
            sol.push(i);
    }
    return sol;
}

module.exports = router;