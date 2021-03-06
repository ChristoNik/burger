var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

//serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


// parse application
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);