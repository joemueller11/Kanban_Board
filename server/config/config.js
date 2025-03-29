const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || 'database_name',
    process.env.DB_USER || 'database_user',
    process.env.DB_PASSWORD || 'database_password',
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}