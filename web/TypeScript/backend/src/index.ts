import express from "express"
//import http from "http";
//http.createServer().listen(()=>{console.log("Server Running")},4000)
const app=express()

app.get('/',(req,res)=>{
    console.log(req)
    res.end("Hello World")
})