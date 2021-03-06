var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {


    res.render('crt', {
        solution: ''
    });


});

router.post('/', function (req, res, next) {


    let a = [req.body.a1, req.body.a2, req.body.a3];
    let m = [req.body.m1, req.body.m2, req.body.m3];
    try {
        let solution = solveModuli(a, m);

        res.render('crt', {
            solution
        })

    }catch(e){
        alert(e)
    }


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