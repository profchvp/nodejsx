/*   Aula 54 Usando Insomnia*/

const express = require('express');

const cursos=['node JS', 'JavaScript', 'React Natvie'];

const server = express();
 
    server.get('/curso/:index', (req,res)=>{
     
    const {index} = req.params;
    return res.json(cursos[index]); 
    }); 

server.listen(3000); //escutar a porta 300
