let free = false;

const validarCliente = (time)=>{
    let edad = prompt("que edad tienes");
    if(edad >= 18){
        if(time >= 2 && time < 7 && free ==false){
            alert("podes pasar sin pagar porque sos la primera persona despues de las 2 AM");
            free = true;
        }
        else if(time >= 7 && time < 10.9999){
            alert("a esta cerrado perdon");
        }
        else{
            alert("podes pasar pero tenes que pagar la entrada");
        }
    }
    else{
        alert("no podes pasar porque sos menor de edad");
    }
}
validarCliente(11);
validarCliente(12);
validarCliente(1);
validarCliente(2);
validarCliente(2.20);
validarCliente(4);
validarCliente(8);