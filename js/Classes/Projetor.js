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
    moduloVetor(v1) {
        var total = 0
        for (var i = 0; i < v1.length; i++) {
            total += Math.pow(v1[i], 2)
        }
        return Math.sqrt(total)
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
        //this.ctx.fillStyle = "rgb(70,60,140)";
        //this.ctx.beginPath();
        //this.ctx.moveTo(500, 500);
        //this.ctx.lineTo(600, 500);
        //this.ctx.lineTo(600, 600);
        //this.ctx.lineTo(500, 650);
        //this.ctx.lineTo(500, 500);
        //this.ctx.closePath();
        //this.ctx.fill();
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
                //Pintar face
                //Pintar face
                //Pintar face

                //Calcular Intensidade da Cor (I = I.ambiente + I.difuso + I.especular)
                var ka = 0.4
                var Iam = [70, 60, 140]
                var Idif = [255, 255, 255]
                var I = []
                
                for (var i=0; i < Iam.length; i++) {
                    Iam[i] *= ka
                    Iam[i] += ka*Idif[i]*Math.cos((this.produtoInterno(t, normal[j])/(this.moduloVetor(t)*this.moduloVetor(normal[j]))))
                    I.push(Iam[i])
                }
                console.log(I)

                this.ctx.fillStyle = "rgb("+I[0]+","+I[1]+","+I[2]+")";
                this.ctx.beginPath();
                var last;
                for (var i = 0; i < objeto.faces[j].length; i++) {
                    if (i == 0){
                        console.log("olaaaaaaaaaa1");
                        if(objeto.faces[j][i][0] == objeto.faces[j][i+1][0] || objeto.faces[j][i][0] == objeto.faces[j][i+1][1]) {
                            this.ctx.moveTo(objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][0]][0], objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][0]][1]);
                            last = 0;
                        } else {
                            this.ctx.moveTo(objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][1]][0], objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][1]][1]);
                            last = 1;
                        }
                    } else {
                        if(objeto.arestas[objeto.faces[j][i]][0] == objeto.arestas[objeto.faces[j][i-1]][last]) {
                            console.log("olaaaaaaaaaa");
                            
                            this.ctx.lineTo(objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][0]][0], objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][0]][1]);
                            last = 1;
                        } else {
                            
                            this.ctx.lineTo(objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][1]][0], objeto.coordenadas[objeto.arestas[objeto.faces[j][i]][1]][1]);
                            last = 0;
                        }
                    }                    
                    if(objeto.faces[j].length - 1 == i) {
                        if(objeto.arestas[objeto.faces[j][0]][0] == objeto.arestas[objeto.faces[j][i-1]][last]) {
                            console.log("olaaaaaaaaaa");
                            this.ctx.lineTo(objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][0]][0], objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][0]][1]);
                            last = 1;
                        } else {
                            
                            this.ctx.lineTo(objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][1]][0], objeto.coordenadas[objeto.arestas[objeto.faces[j][0]][1]][1]);
                            last = 0;
                        }
                    }
                }
                this.ctx.closePath();
                this.ctx.fill();
                //Pintar face FIM
                //Pintar face FIM
                //Pintar face FIM

            }
        }
        console.log(arr);

        

        //Método que desenha tudo que foi "demarcado" na tela
        

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
