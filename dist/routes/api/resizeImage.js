"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const express_1 = require("express");
const route = (0, express_1.Router)();
//middlewares
const validation = (req, res, next) => {
    const { filename } = req.query;
    if (!filename)
        return res.status(404).send('Yous should include filename');
    next();
};
exports.validation = validation;
//actual api 
route.get('/', (req, res) => {
    res.send("route working");
});
exports.default = route;
