const express = require('express');
const server = express();

server.use(express.json());

let users = {
  usuarios: [
    {
      id: 1,
      nome: 'Gabriel Angelim',
      idade: '28',
    },
    {
      id: 2,
      nome: 'Kathellen Karolayne',
      idade: '27',
    },
    {
      id: 3,
      nome: 'Kevin Kellyson',
      idade: '29',
    },
    {
      id: 4,
      nome: 'Kemmerson',
      idade: '22',
    },
  ],
};

//rota de visualização geral
server.get('/users', (req, res) => {
  const data = new Date();
  const new_users = {
    usuarios: users.usuarios,
    total_usuarios: users.usuarios.length,
    data_solicitacao: data.toISOString(),
  };
  return res.status(200).json(new_users);
});

//rota de visualização individual
server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users['usuarios'].find((user) => user.id === parseInt(id));
  const status = user ? 200 : 404;
  return status == 200
    ? res.status(status).json(user)
    : res.status(status).json({ error: 'Usuário não encontrado' });
});

//rota de inclusão
server.post('/users', (req, res) => {
  const { nome, idade } = req.body;
  const id = Math.max(...users.usuarios.map((n) => n.id)) + 1;
  const novo_usuario = { id, nome, idade };
  users.usuarios.push(novo_usuario);
  return res.status(201).json(novo_usuario);
});

//rota de atualização
server.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;

  const index = users.usuarios.findIndex((user) => user.id === parseInt(id));
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
    users.usuarios[index] = { id: parseInt(id), nome: nome, idade: idade };
    return res.status(status).json(users.usuarios[index]);
  }
  return res.status(status).json({ error: 'Usuário não encontrado' });
});

//rota de exclusão
server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.usuarios.findIndex((user) => user.id === parseInt(id));
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
    users.usuarios.splice(index, 1);
    return res.status(status).json(users);
  }
  return res.status(status).json({ error: 'Usuário não encontrado' });
});

server.listen(3000);
