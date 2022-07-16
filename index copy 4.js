/*   Aula 56 - Praticando conhecimento CRUD*/

const express = require('express');
const server = express();
server.use(express.json());
const cursos=['node JSx', 'JavaScript', 'React Natvie'];


    //Retornar todos nossos cursos
    server.get('/cursos',(req, res)=>{
        return res.json(cursos);
    });
    //Retornar um único curso
    server.get('/cursos/:index', (req,res)=>{
     
    const {index} = req.params;
    return res.json(cursos[index]); 
    }); 
//criar novos cursos (POST)
server.post('/cursos',(req,res)=>{
   const {nomeCurso}=req.body;
   cursos.push(nomeCurso);
   
   return res.json(cursos);
});
//Editar um curso (PUT)
server.put('/cursos/:index',(req,res)=>{
    const {index}=req.params;
    const{nomeCurso}=req.body;
    cursos[index]=nomeCurso;
    
    return res.json(cursos);
 });
 //
 //Excluirum curso (DELETE)
server.delete('/cursos/:index',(req,res)=>{
    const {index}=req.params;
    cursos.splice(index,1);
        
    //return res.json(cursos);
      return res.json({message:"Curso deletado com sucesso!!!"});
 });
//
server.listen(3000); //escutar a porta 3000