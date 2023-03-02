var numeroSecreto = parseInt(math.random() * 1001)+ 1;
while(chute != numeroSecreto){
  var chute = prompt("digite um número entre 1 até 1000 ")
  var texto = " o numero que você digitou"
  //se o número for igual ao secreto;
  if (chute == numeroSecreto){
    //alert("acertou!")
  }else if (chute > numeroSecreto){
    //alert("Errou... o número secreto é menor" + texto)
  }else if(chute < numeroSecreto){
    //alert("Errou... o número secreto é maior" + texto)
  }
}
