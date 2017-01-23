import express from 'express';
const router = express.Router();
const app = express();

exports.index = function(req, res){
    res.render('index', { name: 'John' ,title:'title name'});
};