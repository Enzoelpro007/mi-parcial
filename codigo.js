// alert("puto el que lea");
//codigo parar agregar cosas
function ShowHide(){
    var container = document.getElementsByClassName("cuadrito")[0];
    if (container.style.visibility=="hidden"){
        container.style.visibility="visible";

    }else{
        container.style.visibility="hidden";
    }
}