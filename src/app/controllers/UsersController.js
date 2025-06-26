// import User from "../models/User.js";

class UsersController {
    constructor() {
        this.users = {
            usuarios: [
                {
                    id: 1,
                    nome: "Usuario 1",
                    idade: "28",
                },
                {
                    id: 2,
                    nome: "Usuario 2",
                    idade: "27",
                },
                {
                    id: 3,
                    nome: "Usuario 3",
                    idade: "29",
                },
                {
                    id: 4,
                    nome: "Usuario 4",
                    idade: "22",
                },
            ],
        };
    }

    // Lista os usuarios
    async index(req, res) {
        // const UsersMySQL = await User.findAll({ limit: 1000 });
        const data = new Date();
        const new_users = {
            usuarios: this.users.usuarios,
            total_usuarios: this.users.usuarios.length,
            data_solicitacao: data.toISOString(),
        };
        return res.status(200).json(new_users);
    }

    // Recupera um usuario
    show(req, res) {
        const { id } = req.params;
        const user = this.users["usuarios"].find(
            (user) => user.id === parseInt(id)
        );
        const status = user ? 200 : 404;
        return status == 200
            ? res.status(status).json(user)
            : res.status(status).json({ error: "Usuário não encontrado" });
    }

    // Cria um novo usuario
    create(req, res) {
        const { nome, idade } = req.body;
        const id = Math.max(...this.users.usuarios.map((n) => n.id)) + 1;
        const novo_usuario = { id, nome, idade };
        this.users.usuarios.push(novo_usuario);
        return res.status(201).json(novo_usuario);
    }

    // Atualiza um usuario
    update(req, res) {
        const { id } = req.params;
        const { nome, idade } = req.body;

        const index = this.users.usuarios.findIndex(
            (user) => user.id === parseInt(id)
        );
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            this.users.usuarios[index] = {
                id: parseInt(id),
                nome: nome,
                idade: idade,
            };
            return res.status(status).json(this.users.usuarios[index]);
        }
        return res.status(status).json({ error: "Usuário não encontrado" });
    }

    // Deleta um usuario
    destroy(req, res) {
        const { id } = req.params;
        const index = this.users.usuarios.findIndex(
            (user) => user.id === parseInt(id)
        );
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            this.users.usuarios.splice(index, 1);
            return res.status(status).json(this.users);
        }
        return res.status(status).json({ error: "Usuário não encontrado" });
    }
}

export default new UsersController();
