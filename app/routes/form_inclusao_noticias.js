module.exports = function(app){
    
    app.get('/form_inclusao_noticias',function(req,res){
        
        
    var mysql = require('mysql');
      
    var conn = mysql.createConnection({
          host : 'localhost',
          user : 'root',
          password : '',
          database : 'portal_noticias'
          
      });
      
      conn.query('select * from noticias', function(erro,result){
            res.send(result);
             //  res.render('admin/form_add_noticias');
      });
      
    });
    
}



