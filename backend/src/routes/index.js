const express = require('express')

const routes = express.Router()

//Olá
routes.get('/ola', (req, res) =>{
  res.json({message:"Olá mundo!"})
})

routes.get('/',(request, response) => {
  response.json({
    evento: 'Semana da hora',
    aluno: 'Ivan Ribeiro'
  });
});

routes.post('/users',(request, response) => {
  const body = request.body;
  console.log(body)
  response.json({
    evento: 'Semana da hora',
    aluno: 'Ivan Ribeiro'
  });
});

module.exports = routes