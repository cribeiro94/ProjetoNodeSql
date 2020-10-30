const User = require('../models/User');
const Investments = require('../models/Investments');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'investments' }
        });

        return res.json(user);
    },
    
    async store(req, res) {
         const { user_id } = req.params;
         const { criptoativos, simulacao_ganhos, simulacao_perdas } = req.body;

         const user = await User.findByPk(user_id);

         if (!user) {
             return res.status(400).json({ error: 'User not found' });
         }

         const investments = await Investments.create({
            criptoativos,
            simulacao_ganhos,
            simulacao_perdas,
            user_id,
         });

         return res.json(investments);
   }
};