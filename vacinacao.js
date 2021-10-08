function solucao(obj) {
    //seu codigo aqui
    if(obj.jaTomouVacina){
        console.log("JA TOMOU VACINA")
    }else if(obj.temComorbidade && obj.idade < 60) {
        console.log("APTA POR COMORBIDADE")
    }else if(obj.idade >= 60) {
        console.log("APTA POR IDADE")
    }else {
        console.log("INAPTA")
    }
}
