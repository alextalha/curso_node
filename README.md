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

