const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

const UserController = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ error: "Todos os campos (nome, email, senha) são obrigatórios." });
      }

      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({ error: "Este email já está cadastrado." });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      

      const newUser = await UserModel.create(name, email, passwordHash);

      return res.status(201).json({ 
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
  }
};

module.exports = UserController;