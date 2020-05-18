
const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
const bodyParser = require("body-parser");
const middleware =require("./middlewares");
//Para que El servidor reciba request de  tipo JSON
app.use(bodyParser.json());

app.use(middleware.saludo);

app.post("/otraruta",function(req,res){

})

app.post("/webhook",function(req,res){
  let data= req.body;
   console.log("####################################")
   console.log(data);
   console.log(req.saludo);
//   console.log(`USERID : ${data.id} - Mensaje : ${data.mensaje}`)
  res.json({mensaje:"Mensaje Recibido !!"})
})

//iniciar Servidor
app.listen(port,()=>{
    console.log(`Servidor ejecutando en el puerto ${port}`)
})
