const { Model, DataTypes } = require('sequelize');

class Investments extends Model {
     static init(sequelize) {
         super.init({
             criptoativos: DataTypes.STRING,
             simulacao_ganhos: DataTypes.STRING,
             simulacao_perdas: DataTypes.STRING,
         }, {
             sequelize 
         })
     }

     static associate(models) {
         this.belongsTo(models.User, { foreignKey: 'user_id', as: 'investments' });
     }
}

module.exports = Investments;