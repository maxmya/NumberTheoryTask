var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    let reso = solveModuli([6, 3,2], [3, 5,7]);

    res.render('crt', {
        reso
    });


});

router.post('/', function (req, res, next) {







});


function solveModuli(a, m) {
    let product = 1;
    for (let i = 0; i < m.length; i++) {
        product *= m[i];
    }
    let h = [];
    let n = [];
    for (let k = 0; k < m.length; k++) {
        n.push(product / m[k]);
    }
    for (let i = 0; i < m.length; i++) {
        h.push(mPower(n[i], phi(m[i] - 1), product));
    }

    let result = 0;
    for (let i = 0; i < m.length; i++) {
        let x = (a[i] * (h[i] % product)) % product;
        x = (x * (n[i] % product)) % product;
        result += x;
        result %= product;
    }
    return result;
}

function mPower(a, po, mod) {
    let power = 1;
    for (let i = 0; i < po; i++) {
        power *= a;
        power %= mod;
    }
    console.log(power)
    return power;
}

function phi(n) {
    let i = 0;
    for (let k = 1; k < n; k++) {
        if (egcd(n, k) == 1) i++;
    }
    return i;
}

function egcd(m, n) {
    if (n == 0) return m;
    return egcd(n, m % n);
}

module.exports = router;