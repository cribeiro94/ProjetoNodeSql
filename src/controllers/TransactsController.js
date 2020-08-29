const User = require('../models/User');
const Transacts = require('../models/Transacts');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'transactions' }
        });

        return res.json(user.transactions);
    },
    
    async store(req, res) {
         const { user_id } = req.params;
         const { tipotransacao, criptoqtd, qtdreais, dadosrecebedor } = req.body;

         const user = await User.findByPk(user_id);

         if (!user) {
             return res.status(400).json({ error: 'User not found' });
         }

         const transacts = await Transacts.create({
            tipotransacao,
            criptoqtd,
            qtdreais,
            dadosrecebedor,
            user_id,
         });

         return res.json(transacts);
   }
};