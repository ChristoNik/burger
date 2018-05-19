// set up MySQL conection

var mysql = require("mysql");

var connection;

// 'if' for heroku deployment, 'else' conect to local machine database server
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host:'localhost',
        user:"root",
        password:'123Fun',  //Add YOUR OWN PASSWORD HERE!
        database:"burger_db"
    });
}

//export conection to ORM
module.exports = connection;