var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Lab3 Family' });
});
/*Get Jeff*/
router.get('/Jeff', function(req, res, next) {
    res.render('Jeff');
});
/*Get Tracey*/
router.get('/Tracey', function(req, res, next) {
    res.render('Tracey');
});
/*Get Dave*/
router.get('/Dave', function(req, res, next) {
    res.render('Dave');
});
/*Get Kara*/
router.get('/Kara', function(req, res, next) {
    res.render('Kara');
});
module.exports = router;
