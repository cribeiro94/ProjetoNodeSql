const { Model, DataTypes } = require('sequelize');

class User extends Model {
     static init(sequelize) {
         super.init({
             nomecliente: DataTypes.STRING,
             cpfcliente: DataTypes.STRING,
             cnpjcliente: DataTypes.STRING,
             razaosocial: DataTypes.STRING,
             endcliente: DataTypes.STRING,
             email: DataTypes.STRING,
             telcliente: DataTypes.STRING,
             bancocliente: DataTypes.STRING,
             agencia: DataTypes.STRING,
             numeroconta: DataTypes.STRING,
             password: DataTypes.INTEGER,
             ativo: DataTypes.BOOLEAN,
         }, {
             sequelize 
         })
     }

     static associate(models) {
        this.hasMany(models.Transactions, { foreignKey: 'user_id', as: 'transactions' });
        this.hasMany(models.Forms, { foreignKey: 'user_id', as: 'forms' });
        this.hasMany(models.Balances, { foreignKey: 'user_id', as: 'balanceupdates' });
        this.hasMany(models.Investments, { foreignKey: 'user_id', as: 'investments' });
    }
}

module.exports = User;