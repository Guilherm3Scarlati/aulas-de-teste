const express = require ('express');
const rota = express();

rota.get('/', function(req, res) {
    res.send('<h1>Aqui vou chamar minha página inicial - Bolo de Café</h1>');
});

rota.get('/sequa', function(req, res) {
    res.send('<h1>123456789!</h1>');
})

rota.listen(3001, ()=>{
    console.log('Servidor iniciado!!')
});