var express = require('express'),
    app     = express(),
    morgan  = require('morgan');

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

app.get('/Laender',function(req,res){
	var items = [
		{name:'Test 1 DE', location:'Deutschland'},
		{name:'Test 2 AT', location:'Österreich'},
		{name:'Test 3 CH', location:'Schweiz'},
		{name:'Test 4 FR', location:'Frankreich'},
		{name:'Test 5 GB', location:'Großbritanien'}
		];
	res.send(items);
});
app.get('/',function(req,res){
    res.render('index.html', { pageCountMessage : 'Test Test xxx'});
});
// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  console.log('test message mwa');
  res.status(500).send('Something bad happened!');
});
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || process.env.UI5_NODEJS_PORT || 4040,
	ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP   || process.env.UI5_NODEJS_IP   || '127.0.0.1';
//
app.listen(port, ip);
//var port = 4000;
//app.listen(port);
console.log('Server running on http://%s:%s', ip, port);
module.exports = app ;