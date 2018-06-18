var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Number Theory',
    paragraph: 'Number theory class 2018 programming task , this website is made with "expressjs" a javascript freamwork for web.\nMade by : Mahmoud Aref , Code : 110747'
  });
});

module.exports = router;
