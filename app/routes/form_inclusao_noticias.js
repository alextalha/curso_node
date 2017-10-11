var dbConnection = require('../../config/dbConnection');


module.exports = function(app){
    
    app.get('/form_inclusao_noticias',function(req,res){
   
    var conn = dbConnection();
    
      conn.query('select * from noticias', function(erro,result){
            //res.send(result);
             res.render('admin/form_add_noticias',{noticias: result});
      });
      
    });
    
    
}

