module.exports = function(app){
    
    app.get('/form_inclusao_noticias',function(req,res){
        res.render('admin/form_add_noticias');
    });
}