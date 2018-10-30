var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
    var info = {
        burger: [],
        item: []
    };
    burger.selectAll(function(data){
        for(var i=0; i<data.length; i++){
            info.burger.push(data[i]);
        }
    
        burger.getMenu(function(data){
            for(var i=0; i<data.length; i++){
                info.item.push(data[i]);
            }

            res.render('index', info);
        });
    });
});

router.get('/menu', function(req,res){
    burger.getMenu(function(data){
        res.render('restaurantMenu', { item: data });
    });
});

router.post('/create', function(req,res){
    burger.insertOne([req.body.burgerInput], function(){
        res.redirect('/');
    });
});

router.put('/update/:id', function(req,res){
    burger.updateOne([req.body.devoured], [req.params.id], function(){
        res.redirect('/');
    });
});

router.delete('/delete/:id', function(req,res){
    burger.deleteOne([req.params.id], function(){
        res.redirect('/');
    });
});

module.exports = router;