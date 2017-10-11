
module.exports = function(app){
    
      var conn = app.config.dbConnection();
    
    app.get('/form_inclusao_noticias',function(req,res){
 
   
      conn.query('select * from noticias', function(erro,result){
            //res.send(result);
            console.log('Conexão do BD foi estabelecida');
             res.render('admin/form_add_noticias',{noticias: result});
      });
      
    });
    
    
}

