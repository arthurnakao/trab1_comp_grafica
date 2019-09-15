class Evento {
    constructor(forma, matriz, frameInicial,  frameFinal){
        this.forma = forma;
        this.matriz = matriz;
        this.matrizResultado = 0;
        this.quadrosIntermediarios = 0;
        this.frameInicial = frameInicial;
        this.frameFinal = frameFinal;
        this.quadrosIntermediarios = 0;
    }

    gerarMatrizResultado(){
        
    }

    gerarMatrizesIntermediarias(){
        return null;
    }

    somaMatriz(){

    }

    multiplicaMatriz(a, b) {
        var aNumRows = a.length, aNumCols = a[0].length,
            bNumRows = b.length, bNumCols = b[0].length,
            m = new Array(aNumRows);  // initialize array of rows
        for (var r = 0; r < aNumRows; ++r) {
          m[r] = new Array(bNumCols); // initialize the current row
          for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
              m[r][c] += a[r][i] * b[i][c];
            }
          }
        }
        return m;
    }

}