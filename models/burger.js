//import ORM to interact with database
var orm = require('../config/orm.js');


// call the ORM functions using burger specific input for the ORM.
var burger = {

    selectAll: function(callback){
        orm.selectAll(function(res){
            callback(res);
        });
    },

    insertOne: function(burger_name, callback){
        orm.insertOne(burger_name, function(res){
            callback(res);
        });
    },

    updateOne: function(burger_id, callback){
        orm.updateOne(burger_id, function(res){
            callback(res);
        });
    }

};


// export databse functions for burge_controllerr.js
module.exports = burger;