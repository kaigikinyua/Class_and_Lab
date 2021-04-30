"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import http from "http";
//http.createServer().listen(()=>{console.log("Server Running")},4000)
const app = express_1.default();
app.get('/', (req, res) => {
    console.log(req);
    res.end("Hello World");
});
