import { Sequelize } from "sequelize";

const sequelize = new Sequelize("airtribe", "root", "root", {
  dialect: "mysql",
  host: "db"
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Synchronize models with the database
    await sequelize.sync({ force: false });
    console.log('Models have been synchronized with the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
