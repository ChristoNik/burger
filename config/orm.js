//import mysql conection
var connection = require("./connection.js");

//connecto to mysql datbse
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

//methods for mysql queries
var orm = {

    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    insertOne: function(burger_name, callback) {
        // run mysql query
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
        },
            function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },
    updateOne: function(burgerID, callback){
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
            if (err) throw err;
            callback(result);
        });

    }

};
//export the orm object for burger.js
module.exports = orm;
