/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) 2020 Adathink Lab
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
const bodyParser = require("body-parser");
//Para que El servidor reciba request de  tipo JSON
app.use(bodyParser.json());

//POST http://localhost:3400/webhook
app.post("/webhook",function(req,res){
  let data = req.body;
  let {numero} = data;
   if(numero%2==0){
     mensaje="Número par"
   }else{
     mensaje="Número impar"
   }


 let respuesta ={
   mensaje: mensaje
 }
   console.log("####################################")
   console.log(data);
//   console.log(`USERID : ${data.id} - Mensaje : ${data.mensaje}`)
  res.json(respuesta)
})

//iniciar Servidor
app.listen(port,()=>{
    console.log(`Servidor ejecutando en el puerto ${port}`)
})
