
module.exports = {
    saludo:function(req,res,next){
        let data = req.body;
        let {numero} = data;
        req.saludo="El número multiplicado 89 es : "+numero*89;
        next();//dirige ala funcion final
    }
}
