/*   Aula 53 */

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
//Query params...server.get('/curso', (req,res)=>{
//Route Params...server.get('/curso/:id', (req,res)=>{  
    server.get('/curso/:idEntrada', (req,res)=>{
    //const nome = req.query.nomeEntrada; //nomeEntrada é digitado na URL
      const idCurso = req.params.idEntrada;
    return res.json({
        cruso: `ID do curso é : ${idCurso}`,
        autor:"chvp"
    })
}); 

server.listen(3000); //escutar a porta 3000