function solucao(sequencia) {
    let indiceAtual = 0
    for(i = 0; i < sequencia.length; i++) {
        if (indiceAtual == 6 && sequencia[i] == ">"){
            indiceAtual = 0
        } else if (indiceAtual == 0 && sequencia[i] == "<"){
            indiceAtual = 6    
        } else if ( sequencia[i] == ">" ) {
            indiceAtual++
        } else if (sequencia[i] == "<") {
            indiceAtual--
        }
    }
    console.log(indiceAtual)
}