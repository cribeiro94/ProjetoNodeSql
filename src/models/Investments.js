const { Model, DataTypes } = require('sequelize');

class Investments extends Model {
     static init(sequelize) {
         super.init({
             simula_ganhos: DataTypes.STRING,
             simula_perdas: DataTypes.STRING,
         }, {
             sequelize 
         })
     }

     static associate(models) {
         this.belongsTo(models.User, { foreignKey: 'user_id', as: 'investments' });
     }
}

module.exports = Investments;