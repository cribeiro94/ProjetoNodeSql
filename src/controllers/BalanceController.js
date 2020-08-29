const User = require('../models/User');
const Balances = require('../models/Balances');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'balanceupdates' }
        });

        return res.json(user.balanceupdates);
    },
    
    async store(req, res) {
         const { user_id } = req.params;
         const { cripto_qtd, saldo_reais } = req.body;

         const user = await User.findByPk(user_id);

         if (!user) {
             return res.status(400).json({ error: 'User not found' });
         }

         const balanceupdates = await Balances.create({
            cripto_qtd,
            saldo_reais,
            user_id,
         });

         return res.json(balanceupdates);
   }
};