var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(request,response){
    var context={
        titulo: 'pagina principal',
    }
    response.render('home',context);
});

app.post('/login', function(request,response){
    console.log('hola');
    response.send('hola');
});

app.listen(3000);