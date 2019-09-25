class Cizalhamento extends Transformer {
    criadorDeInbetween() {
        var intervalo = this.fim - this.inicio;
        var m = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        var k = 0;
        var matrizes = new Matrizes()
        var identidade = matrizes.identidade(this.matrizDeTransformacao);

        for (var i = 0; i < 3; i++) {
            for(var j=0; j<3; j++){
                if (this.matrizDeTransformacao[i][j] == 1) {
                    m[i][j] = 0;
                }
                else  {
                    m[i][j] = this.matrizDeTransformacao[i][j] / intervalo;
                }
                
            }
        }
        var matrizAux = this.matrizDeTransformacao;
        for (var j = this.fim; j > this.inicio; j--) {
            this.transformacoesIntermediarias[j] = matrizAux
            matrizAux = matrizes.subtracao(matrizAux, m);
        }
        return this.transformacoesIntermediarias;
    }

} 