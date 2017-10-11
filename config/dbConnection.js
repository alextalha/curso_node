var mysql = require('mysql');

    
var connMySQL = function(){
    console.log('Conexao com o bd foi estabelecida')
    return mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '',
                database : 'portal_noticias'
            });
}

module.exports = function(){  
    
    console.log('O Autoload carregou o modulo de conexão com o banco de dados');
    
    return connMySQL;
}