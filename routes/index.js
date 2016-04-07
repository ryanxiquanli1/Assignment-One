var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var graph = mongoose.model('graph');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Data', function(req, res, next) {
  graph.find(function(err, Data){
    if(err){ return next(err); }
    res.json(Data);
  });
});

module.exports = router;
