const { update } = require('../models/User');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
      const { nomecliente, cpfcliente, cnpjcliente, razaosocial, endcliente, email, telcliente, bancocliente, agencia, numeroconta, password, ativo } = req.body;

      const user = await User.create({ nomecliente, cpfcliente, cnpjcliente, razaosocial, endcliente, email, telcliente, bancocliente, agencia, numeroconta, password, ativo });

      return res.json(user);
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
      }
};