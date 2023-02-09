const Sequelize = require ('sequelize'); //instânciada a Sequelize
const sequelize = new Sequelize ('hospital3', 'aluno', 'Senai1234', {dialect:'mysql', host:'ESN509VMYSQL', query:{raw:true}});

//verificando se a conexão foi bem sucedida

sequelize.authenticate()
.then (function() {
    console.log('Conectado com o BD!!')
})
.catch (function() {
        console.log('Erro de conexão');
    })

    //exportando o modulo para ser utilizado em outras classes

    module.exports = sequelize;