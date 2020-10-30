const { Model, DataTypes } = require('sequelize');

class Balances extends Model {
     static init(sequelize) {
         super.init({
             cripto_qtd: DataTypes.STRING,
             saldo_reais: DataTypes.STRING,
         }, {
             sequelize 
         })
     }

     static associate(models) {
         this.belongsTo(models.User, { foreignKey: 'user_id', as: 'balanceupdates' });
     }
}

module.exports = Balances;