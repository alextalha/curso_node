var app = require('./config/server.js');



app.get('/',function(req,res){
 //res.send('Está rodando a opção teste');
  res.render('home/index');
});


app.get('/form_inclusao_noticia',function(req,res){
  res.render('admin/form_add_noticias');
});


app.get('/noticias',function(req,res){
  res.render('noticias/noticias');
});



app.listen(8081,function(){
  console.log('Servidor Rodando na porta 8081');

});








