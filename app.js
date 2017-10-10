var app = require('./config/server.js');


var rotaIndex = require('./app/routes/index')(app);

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaFormAddNoticias = require('./app/routes/form_inclusao_noticias')(app);


app.listen(8081,function(){
  console.log('Servidor Rodando na porta 8081');

});








