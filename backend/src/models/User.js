const { Model, DataTypes } = require('sequelize');

class User extends Model {
     static init(sequelize) {
         super.init({
             name: DataTypes.STRING,
             cpf: DataTypes.STRING,
             cnpj: DataTypes.STRING,
             razaosocial: DataTypes.STRING,
             endereco: DataTypes.STRING,
             email: DataTypes.STRING,
             password: DataTypes.STRING,
             telefone: DataTypes.STRING,
             bancocliente: DataTypes.STRING,
             agencia: DataTypes.STRING,
             numeroconta: DataTypes.STRING,
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