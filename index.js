/*   Aula 57 - Aplicando Middlewares*/

const express = require('express');
const server = express();
server.use(express.json());
const cursos=['node JSx', 'JavaScript', 'React Natvie'];

/*-------------------*
 MIDDLEWARE GLOBAL
 *------------------- */
   /*.....este Middleware bloqueia a requisição
          server.use((req,res)=>{
              console.log("Requisição Chamada - Middleware GLOBAL");
           })
    */
   /*.....este Middleware libera a requisição next()*/
        /*
          server.use((req,res,next)=>{
              console.log("Requisição Chamada - Middleware GLOBAL- com next()");
              console.log(`URL chamada: ${req.url}`);
            return next();  
           }) */
   /*......Middleware para verificação de rota: */
           function checkCurso(req, res,next){
               if(!req.body.nomeCurso){
                  return res.status(400).json({error:"Nome do curso é obrigatório"});
               }
               return next();
           }  
           /*......Middleware para verificação de rota(INDEX): */
           function checkIndexCurso(req, res,next){
            const curso = cursos[req.params.index];
            //.....if(!cursos[req.params.index]){..........ou:
            if(!curso){
               return res.status(400).json({error:"Cód de Curso não existe"});
            }
            return next();
        }  
//
//Retornar todos nossos cursos
    server.get('/cursos',(req, res)=>{
        return res.json(cursos);
    });
    //Retornar um único curso
    server.get('/cursos/:index',checkIndexCurso, (req,res)=>{
     
    const {index} = req.params;
    return res.json(cursos[index]); 
    }); 
//criar novos cursos (POST)
server.post('/cursos',checkCurso,(req,res)=>{
   const {nomeCurso}=req.body;
   cursos.push(nomeCurso);
   
   return res.json(cursos);
});
//Editar um curso (PUT)
server.put('/cursos/:index',checkCurso,checkIndexCurso,(req,res)=>{
    const {index}=req.params;
    const{nomeCurso}=req.body;
    cursos[index]=nomeCurso;
    
    return res.json(cursos);
 });
 //
 //Excluirum curso (DELETE)
server.delete('/cursos/:index',checkIndexCurso,(req,res)=>{
    const {index}=req.params;
    cursos.splice(index,1);
        
    //return res.json(cursos);
      return res.json({message:"Curso deletado com sucesso!!!"});
 });
//
server.listen(3000); //escutar a porta 3000