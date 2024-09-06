function entrar () {
var user = document.
getElementById("cxuser").value;
var senha = document.
getElementById("cxsenha").value;
if(user == "ADM" && senha =="123"){
    alert("Acesso Permitido")
 }
 else{
      alert("Acesso Negado")
 }

}

function parimpar(){
     var n1 = document.getElementById("cx1").value;
    if (parseFloat (n1) % 2 == 0){
    alert ("Número Par");

    }
    else {
    alert ("Número Ímpar");

    }
}