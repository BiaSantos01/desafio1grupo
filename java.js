function atividade(){
    const x = document.querySelector('#x').value;
    const y = document.querySelector('#y').value;
    const texto = document.querySelector("p");
 
if(x >= 0  && x <=432 && y >= 0 && y <= 468){
    texto.innerHTML = "BOLA DENTRO"
}

else{
    texto.innerHTML = "BOLA FORA"
}
}