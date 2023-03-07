const http = require('http')
const express = require('express')
const app = express() 
const fs = require('fs')
const Afetzede = require('./models/afetzedeModule')



const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes

app.get('/',(req,res)=>{
    res.send("Hello node api")
})

app.get('/home',(req,res)=>{
    res.send("Hello blog")
})

app.get('/afetCrud',async(req,res)=>{
    try{
        const afetzedes = await Afetzede.find({});
        res.status(200).json({afetzedes})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

app.post('/afetCrud',async(req,res)=>{
    try{
        const afetzede = await Afetzede.create(req.body)
        res.status(200).json(product)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

