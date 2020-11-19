const User = require('../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth')

module.exports = {
    async search(req, res) {
      const { id } = req.params;

      const user = await User.findByPk(id);
     
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }
        return res.json(user);
    },

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
      const { name, cpf, cnpj, razaosocial, endereco, email, telefone, bancocliente, agencia, numeroconta, ativo } = req.body;
      var password = bcrypt.hashSync(req.body.password, authConfig.rounds);

      const user = await User.create({ name, cpf, cnpj, razaosocial, endereco, email, telefone, bancocliente, agencia, numeroconta, password, ativo });
      var token = jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires
      });

      return res.json({ user: user, token: token });
    },
    
    async update(req, res) {

      const user = await User.findByPk(req.params.id);

       await user.update(req.body);

      return res.json({ user });
    },

    async destroy(req, res) {
        const user = await User.findByPk(req.params.id);
  
        await user.destroy();
  
        return res.json();
      },
      async signIn(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ 
          where: { 
            email: email 
          } 
        });

       if (!user) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
      } else {

        if (bcrypt.compareSync(password, user.password)) {
          var token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
          });

          return res.json({ 
            user: user,
            token: token
          });

        } else {
          res.status(401).json({ error: "Senha incorreta" })
        }
      }
    }
};