const { Model, DataTypes } = require('sequelize');

class Transactions extends Model {
     static init(sequelize) {
         super.init({
             tipotransacao: DataTypes.STRING,
             criptoqtd: DataTypes.STRING,
             qtdreais: DataTypes.STRING,
             dadosrecebedor: DataTypes.STRING,
         }, {
             sequelize 
         })
     }

     static associate(models) {
         this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
     }

}

module.exports = Transactions;


