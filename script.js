function Checarmenssagem(){

    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msn = document.getElementById('message').value;


    if(name === "" && email === "" && msn === ""){
        alert("Aviso: Campos em branco");
    }   
     if(name === ""){
        alert("Aviso Campo nome em branco!");
     }else if(email === ""){
        alert("Aviso campo email em branco!");
     }else if(msn === ""){
        alert("Aviso campo mensagem em branco!");
      }else{
            alert("Mensagem enviada com sucesso!");
        }


}





       