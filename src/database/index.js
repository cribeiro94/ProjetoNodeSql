const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Transacts = require('../models/Transacts');
const Forms = require('../models/Forms');
const Balances = require('../models/Balances');
const Investments = require('../models/Investments')

const connection = new Sequelize(dbConfig);

User.init(connection);
Transacts.init(connection);
Forms.init(connection);
Balances.init(connection);
Investments.init(connection);

User.associate(connection.models);
Transacts.associate(connection.models);
Forms.associate(connection.models);
Balances.associate(connection.models);
Investments.associate(connection.models);

module.exports = connection;