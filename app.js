var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/routes.js');

var app = express();

app.use(express.static(__dirname + "/public"));

// ******* body-parser int
// body-parser OLD Way
//app.use(bodyparser());
// body-parser New Way
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//body parser init done

//****** session
app.use(session({secret: "secret",  resave : true,  saveUninitialized : false}));
 
app.set('view engine', 'jade');

app.get('/', routes.loginHandler);
app.get('/logout', routes.logoutHandler);
app.get('/toLanding', routes.landingHandler);
app.post('/toCity', routes.cityHandler);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});