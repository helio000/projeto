require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { create, read, readOne, update, remove, login } = require('./src/controllers/aluno.js');
const {
  create: createProfessor,
  read: readProfessor,
  readOne: readOneProfessor,
  update: updateProfessor,
  remove: removeProfessor
} = require('./src/controllers/professor.js');

const app = express();
const port = process.env.PORT || 3100;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas Alunos
app.get('/alunos', read);
app.get('/alunos/:id', readOne);
app.post('/alunos', create);
app.put('/alunos/:id', update);
app.delete('/alunos/:id', remove);

// Login Alunos
app.post('/alunos/login', login);

// Rotas Professores
app.get('/professores', readProfessor);
app.get('/professores/:id', readOneProfessor);
app.post('/professores', createProfessor);
app.put('/professores/:id', updateProfessor);
app.delete('/professores/:id', removeProfessor);

// Rota inicial
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Start do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
