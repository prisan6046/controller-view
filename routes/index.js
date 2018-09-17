var express = require('express');
var json = require('hbs-json');
var hbs = require('hbs')
var router = express.Router();


hbs.registerHelper('json', json);

router.get('/:name' , function(req ,res , next){
    var name = req.params.name
	  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);

  res.render('on', { name: name });
});

module.exports = router;
