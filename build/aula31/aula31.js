"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes/classes");
const classes_2 = __importDefault(require("../classes/classes"));
const p1 = new classes_1.Pessoa('Gabriel', 1.80);
console.log(p1);
const obj1 = new classes_1.Objeto('Mesa');
console.log(obj1);
console.log(classes_2.default);
