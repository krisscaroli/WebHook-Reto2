
const request = require("request");
console.log("Iniciando Mensajes Webhooks")
//simulacion Server Facebook

const url = "http://localhost:3400/webhook";
var count=1;
var decena=0;
var dato = new Object();
setInterval(function(){
  console.log("Lanzando Webhook !")
  let numero;
  if(decena%2==0){
       numero=count*2
  }else{
        numero= count*2 - 1
  }
  let dato ={
    numero: numero
 }
  request({
      method:"POST",
      uri:url,
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(dato)

  },function(err,response,body){
      if(err){console.log("Ocurrio un error al enviar el mensaje webhook"),count--;return;}
     let mensaje =JSON.parse(body)
     //var contar=
      console.log(mensaje);
  })
  if( count%10==0){
    decena++;
  }
 count++;
},5000
);
