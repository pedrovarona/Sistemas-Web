const database = {};

database.users = require('./models/user.model');

function initializeUsers(){
    const NAMES = ['carlos', 'maria', 'juan', 'ana'];
    NAMES.forEach((username) => {
        database.users.register(username, "1234");
    });
}

function initializeDB(){
    initializeUsers();
    console.log("Database initialized");
}

initializeDB();
module.exports = database;