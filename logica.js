function agregar(){
    opcion1 = document.createElement("option");
    var valor = document.getElementById("palabra").value;
    
    opcion1.setAttribute("value",valor);

    document.getElementById("opcion").innerHTML += '<option>'+ opcion1.value +'</option>';   
}
function borrar(){
    var op = document.getElementById("opcion");
    op.remove(op);
}

function modificar(){
    
}