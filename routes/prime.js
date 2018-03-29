var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    let myNumber = req.body.number;

    let list = primeList(myNumber);

    // res.json({
    //     'isPrime': isPrime(myNumber),
    //     'numberOfPrimes': list.length,
    //     'primeList': list,
    //     '4k+1': numOfprimesFormulaOne(list),
    //     '4k+3': numOfprimesFormulaTwo(list)
    // })

    let result = {
        'isPrime': isPrime(myNumber),
        'numberOfPrimes': list.length,
        'primeList': list,
        '4k+1': numOfprimesFormulaOne(list),
        '4k+3': numOfprimesFormulaTwo(list)
    }

    res.render('primes', {
        result
    });
});

router.get('/', function (req, res, next) {
    res.render('primes', {
        result: ''
    });
});


function isPrime(number) {
    if (number === 2)
        return true

    if (number == 1 || number == 0)
        return false

    for (let i = 2; i <= number / i; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

function primeList(number) {
    let mPrimeList = [];

    for (let i = 0; i <= number; i++) {
        //  let flag = isPrime(i);
        if (isPrime(i)) {
            mPrimeList.push(i);
        }
    }

    return mPrimeList;
}

//4k+1
function numOfprimesFormulaOne(list) {
    formulaOneList = [];
    for (let i = 0; i < list.length; i++) {
        if ((list[i] - 1) % 4 === 0)
            formulaOneList.push(list[i]);
    }
    return formulaOneList;
}

//4k+3
function numOfprimesFormulaTwo(list) {
    formulaTwoList = [];
    for (let i = 0; i < list.length; i++) {
        if ((list[i] - 3) % 4 === 0)
            formulaTwoList.push(list[i]);
    }
    return formulaTwoList;
}

module.exports = router;