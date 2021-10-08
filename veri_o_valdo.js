
function solucao(obras) {
	
    let telaValiosa = obras[0];
    
    for (let item of obras){
        if (item.valor > telaValiosa.valor){
            telaValiosa = item
        }
    }
    console.log(telaValiosa.nome)
}