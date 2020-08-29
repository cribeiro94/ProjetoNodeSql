const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
      const { nomecliente, cpfcliente, cnpjcliente, razaosocial, endcliente, email, telcliente, bancocliente, agencia, numeroconta } = req.body;

      const user = await User.create({ nomecliente, cpfcliente, cnpjcliente, razaosocial, endcliente, email, telcliente, bancocliente, agencia, numeroconta });

      return res.json(user);
    }
};