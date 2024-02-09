const express = require("express");
const app = express();
const db =require('./db/conection');




const PORT = 3000;
app.listen(PORT, function(){
    console.log(`O Express esta rodando na porta ${PORT}`);
});


//db
db
    .authenticate()
    .then(()=>{
        console.log("conectou ao banco de dados com sucesso");
    })
    .catch(err=>{
        console.log("Ocorreu um erro ao conectar", err);
    });

//routes
app.get('/', (req,res) =>{
    res.send("Esta funcionando 2");
});


