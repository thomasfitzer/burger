var connection = require("../config/connection.js");

var orm = {
    selectAll: function(callback){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
           if (err) throw (err);
           callback(result); 
        }
        );
    },

    insertOne: function(burger, callback){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function(err, result){
            if (err) throw (err);
            console.log(result); 
            callback(result);
         }
         
        );
    },



    updateOne: function(id, callback){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id],  function(err, result){
            if (err) throw (err);
            console.log(result) 
            callback(result);
         }
         );
    }
};

module.exports = orm;

