
function solucao(precos) {
    //seu codigo aqui
    let soma = 0;
    let maiorQue200 = [0];
    for(const preco of precos) {
        soma += preco
        if(preco > 200)
        maiorQue200 = preco;
    }
    if(soma > 1000 && maiorQue200 > 0) {
      console.log("PREMIUM")
    }else if(soma > 1000) {
      console.log("VIP")
    }
    else {
      console.log("NORMAL")
    }
}