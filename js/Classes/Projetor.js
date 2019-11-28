class Projetor {
    constructor(ctx, listaDeObjetos, matrizDeProjecao) {
        this.ctx = ctx;
        this.listaDeObjetos = listaDeObjetos;
        this.matrizDeProjecao = matrizDeProjecao;
    }

    projetar() {
        this.listaDeObjetos.forEach(element => {
            this.desenhar_linhas(element);
        });
    }
    projetarFinal() {
        this.listaDeObjetos.forEach(element => {
            this.desenhaFinal(element);
        });
    }
    produtoInterno(v1, v2) {
        var total = 0;
        for (var i = 0; i < v1.length; i++) {
            total += v1[i] * v2[i];
        }
        return total;
    }

    desenhar_linhas(objeto) {

        this.ctx.beginPath()

        //For para desenhar todas as arestas
        for (var i = 0; i < objeto.arestas.length; i++) {
            //Posiciona o cursor nas coordenadas definidas pelo primeiro vertice da aresta
            this.ctx.moveTo(objeto.a1[objeto.arestas[i][0]][0], objeto.a1[objeto.arestas[i][0]][1])
            //Desenha uma linha até o segundo vértice da aresta
            this.ctx.lineTo(objeto.a1[objeto.arestas[i][1]][0], objeto.a1[objeto.arestas[i][1]][1])
        }

        //Método que desenha tudo que foi "demarcado" na tela
        this.ctx.stroke()
        this.ctx.closePath()

    }

    desenhaFinal(objeto) {
        this.ctx.beginPath()
        var normal = objeto.normal_plano()
        var arr = [];
        for (var j = 0; j < objeto.faces.length; j++) {
            var t = [objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][0]][0] - 0, objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][0]][1] - 0, objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][0]][2] + 250];
            console.log(objeto.faces[j])
            console.log(t);
            console.log(this.produtoInterno(t, normal[j]));

            if (this.produtoInterno(t, normal[j]) >= 0) {
                for (var i = 0; i < objeto.faces[j].length; i++) {
                    arr.push(objeto.arestas[objeto.faces[j][i]]);
                }
            }
        }
        console.log(arr);

        for (var i = 0; i < arr.length; i++) {
            //Posiciona o cursor nas coordenadas definidas pelo primeiro vertice da aresta
            this.ctx.moveTo(objeto.a1[arr[i][0]][0], objeto.a1[arr[i][0]][1])
            //Desenha uma linha até o segundo vértice da aresta
            this.ctx.lineTo(objeto.a1[arr[i][1]][0], objeto.a1[arr[i][1]][1])
        }

        //Método que desenha tudo que foi "demarcado" na tela
        this.ctx.stroke()
        this.ctx.closePath()

        }
        /*
        for(var i = 0; i<objeto.arestas.length; i++) {
            //Posiciona o cursor nas coordenadas definidas pelo primeiro vertice da aresta
            this.ctx.moveTo(objeto.a1[objeto.arestas[i][0]][0], objeto.a1[objeto.arestas[i][0]][1])
            //Desenha uma linha até o segundo vértice da aresta
            this.ctx.lineTo(objeto.a1[objeto.arestas[i][1]][0], objeto.a1[objeto.arestas[i][1]][1])
        }*/

        //Método que desenha tudo que foi "demarcado" na tela
        //this.ctx.stroke()
        //this.ctx.closePath()
    

}
