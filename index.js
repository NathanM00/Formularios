var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var cont =0;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const fs = require('fs');

app.get('/', function(request,response){
    var context={
        titulo: 'pagina principal',
    }
    response.render('home',context);
});

app.get('/bienvenida', function(request,response){
    var context={
        titulo: 'Hola :D',
    }
    response.render('bienvenida',context);
});

function archivoEscrito(){
    console.log('se creeo el archivo xdxdxd');
}

app.post('/login', function(request,response){
    console.log(request.body);
    cont ++;
    fs.writeFile('info'+cont+'.txt', 'Correo: '+ request.body.correo+'/ Contrasena:'+ request.body.contrasena, 'utf8', archivoEscrito);
    response.redirect('/bienvenida');
});

app.listen(3000);