/**
 * Created by trKing on 2/14/2017.
 */
var Router = require('restify-router').Router;
var routerInstance = new  Router();
var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

// add a rou