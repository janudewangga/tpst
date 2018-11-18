const sequelize = require("sequelize");
const Op = sequelize.Op;
const config = require('./config');
const db = new sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: './tpst.db',
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true
    }
});
db.authenticate().then(() => {
    console.log("Database siap digunakan.");
}).catch(error => {
    console.log("Database bermasalah: " + error);
});