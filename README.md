# curso_node
exemplos do curso de node 


rodando uma url do cloud9.

http://projeto-usuario:<porta>/


npm init -> inicializar um arquivo de configuração inicial do npm


trabalhando com rotas . 
==========================
para cada requisição teremos um arquivo pertinente na pasta das rotas. 


o caminho dos arquivos vai depender muito de onde os arquivos são executados e não a onde ele está localizado.




instalacao do modulo do mysql no node

npm install  mysql --save

sudo apt-get install mysql-server

sudo service mysql start 

mysql -u root   // não tem senha 

===========================================

create database portal_noticias;

use portal_noticias; 

create table noticias(
    id_notcia int not null primary key auto_increment,
    noticias text,
    data_criacao timestamp default current_timestamp,
);


==========================================================

Estamos agora padronizando a aplicacao, separando o design pattern. 




node plataforma do v8 , lado servidor . 
express =>  desenvolvimento de sistemas web

ejs -> embed javascript . 
nodemon utilitario que fica em stand by caso tenha alteração de script.


====================
estruta de projetos
====================


curso_node
    app
        routes
        views
            admin
            home
            noticias
    config
        db.connection
        server.js
    node_modules
    app.js
    mod_teste.js
    noticias.js
    package.json
    
        


=======================================

CONSIGN

=========================================

INSTALAÇÃO 

npm install consign --save


o consign vai ficar no arquivo server.js
ele vai nos ajudar a não precisar escrever as referencias as rotas . ele já vai pegar automaticamente ( autoload ) 


rickcrossbr

