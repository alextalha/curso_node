var http = require('http');


var app = http.createServer(function(req,res){
  
  if(req.url == '/teste'){
    
    res.end('passando pela url teste');
  }else{
    res.end('passando pela url');    
  }

  
});


app.listen(8081,function(){
  
console.log('servidor rodando na porta 8081');  
});

