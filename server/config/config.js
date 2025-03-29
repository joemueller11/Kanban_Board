const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
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

module.exports = sequelize;