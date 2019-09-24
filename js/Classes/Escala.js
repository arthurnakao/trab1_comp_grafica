
class Escala extends Transformer {
    criadorDeInbetween() {
        var intervalo = this.fim - this.inicio;
        var m = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        var k = 0;
        var matrizes = new Matrizes()
        var identidade = matrizes.identidade(this.matrizDeTransformacao);

        for (var i = 0; i < 3; i++) {
            if (this.matrizDeTransformacao[i][k] == 1) {
                m[i][k] = 0;
            }
            else if (this.matrizDeTransformacao[i][k] >= intervalo) {
                m[i][k] = this.matrizDeTransformacao[i][k] / intervalo;
            }
            else if (this.matrizDeTransformacao[i][k] < 1) {
                m[i][k] = (-this.matrizDeTransformacao[i][k]) / intervalo;
            }
            else {
                m[i][k] = (this.matrizDeTransformacao[i][k] - 1) / intervalo;
            }
            k++;

        }
        var matrizAux = this.matrizDeTransformacao;
        for (var j = this.fim; j > this.inicio; j--) {
            this.transformacoesIntermediarias[j] = matrizAux
            matrizAux = matrizes.subtracao(matrizAux, m);
        }
        return this.transformacoesIntermediarias;
    }

}