const User = require('../models/User');
const Forms = require('../models/Forms');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'forms' }
        });

        return res.json(user.forms);
    },
    
    async store(req, res) {
         const { user_id } = req.params;
         const { objcontato, texto } = req.body;

         const user = await User.findByPk(user_id);

         if (!user) {
             return res.status(400).json({ error: 'User not found' });
         }

         const forms = await Forms.create({
            objcontato,
            texto,
            user_id,
         });

         return res.json(forms);
   }
};