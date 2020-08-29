const { Model, DataTypes } = require('sequelize');

class Forms extends Model {
     static init(sequelize) {
         super.init({
             objcontato: DataTypes.STRING,
             texto: DataTypes.STRING,
         }, {
             sequelize 
         })
     }

     static associate(models) {
         this.belongsTo(models.User, { foreignKey: 'user_id', as: 'forms' });
     }
}

module.exports = Forms;