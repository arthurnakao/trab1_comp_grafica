class Projetor{
    constructor(ctx, listaDeObjetos, matrizDeProjecao){
        this.ctx = ctx;
        this.listaDeObjetos = listaDeObjetos;
        this.matrizDeProjecao = matrizDeProjecao;
        this.matrizes = new Matrizes();
    }

    projetar(){
        this.listaDeObjetos.forEach(element => {
            if(this.matrizDeProjecao){
                let aux = [];
                for (let x in element.coordenadas)
                    aux.push(this.matrizes.multiplicacao(x,this.matrizDeProjecao));
                let temp = new Forma(aux, element.arestas, element.faces)
                console.log(temp.coordenadas);
                console.log(element.coordenadas);
                this.desenhar_linhas(temp);
            } else {
                this.desenhar_linhas(element);
            }
        });
    }

    desenhar_linhas(objeto) {

        this.ctx.beginPath()

        //For para desenhar todas as arestas
        for(var i = 0; i<objeto.arestas.length; i++) {
            //Posiciona o cursor nas coordenadas definidas pelo primeiro vertice da aresta
            this.ctx.moveTo(objeto.a1[objeto.arestas[i][0]][0], objeto.a1[objeto.arestas[i][0]][1])
            //Desenha uma linha até o segundo vértice da aresta
            this.ctx.lineTo(objeto.a1[objeto.arestas[i][1]][0], objeto.a1[objeto.arestas[i][1]][1])
        }

        //Método que desenha tudo que foi "demarcado" na tela
        this.ctx.stroke()
        this.ctx.closePath()

    }

}