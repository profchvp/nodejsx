/*   Aula 52 */
const express = require('express');
//console.log(express);
/*
...Query Params = ?nome=NodeJS
...Route Params = /curso/2
...Request Body = {curso:"Node JS", autor:"chvp"}
*/
const server = express();
//rota localhost:3000/curso
//req:Dados da aplicação
//res: Reposta para o frontend
//
server.get('/curso', (req,res)=>{
    //console.log("acessou a rota");
    //return res.send("Hello World");
    return res.json({
        cruso:"Node JS",
        autor:"chvp"
    })
}); 

server.listen(3000); //escutar a porta 3000