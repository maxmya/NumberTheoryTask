var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {


    res.render('ppt', {
        ppts: ''
    });


});

router.post('/', function (req, res, next) {

    let m = req.body.m;
    let ppts = solve(m);

    res.render('ppt', {
        ppts
    });


});

function solve(m) {
    let sol = {
        m: 0,
        type: '',
        n: [],
        x: [],
        y: [],
        z: []
    };
    sol.m = m;
    if (m % 2 == 0) {
        sol.type = 'even';
        for (let i = 1; i < m - 1; i++) {
            if (i % 2 != 0) {
                if (egcd(m, i) == 1) {
                    sol.n.push(i)
                }
            }
        }

    } else {
        sol.type = 'odd';
        for (let i = 1; i < m - 1; i++) {
            if (i % 2 == 0) {
                if (egcd(m, i) == 1) {
                    sol.n.push(i)
                }
            }
        }
    }

    for (let key = 0; key < sol.n.length; key++) {

        sol.x.push((m * m) - (sol.n[key] * sol.n[key]));
        sol.y.push(2 * m * sol.n[key]);
        sol.z.push((m * m) + (sol.n[key] * sol.n[key]));
    }

    return sol;
}

function egcd(m, n) {
    if (n == 0) return m;
    return egcd(n, m % n);
}
module.exports = router;