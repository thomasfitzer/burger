var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    getMenu: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(val, cb){
        orm.insertOne('burgers', 'burger_name', val, function(res){
            cb(res);
        });
    },
    updateOne: function(colVal, conditionVal, cb){
        console.log(colVal);
        console.log(conditionVal);
        orm.updateOne(conditionVal, function(res){
            cb(res);
        });
    },
    deleteOne: function(conditionVal, cb){
        orm.deleteOne(conditionVal, function(res){
            cb(res);
        });
    }
};

module.exports = burger;



