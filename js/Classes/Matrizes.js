class Matrizes{
    multiplicacao(a,b){
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
    identidade(a) {
        for (var i = 0; i < a.length; i++) {
            if (a[i][i] != 1) {
                return false;
            }
        }
        return true;
    }
    soma(a,b){
        var m = []
        var k = []
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                k.push(a[i][j] + b[i][j]);


            }
            m.push(k);
            k = []
        }
        return m;
    }
    subtracao(a,b){
        var m = []
        var k = []
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                k.push(a[i][j] - b[i][j]);


            }
            m.push(k);
            k = []
        }
        return m;
    }
    transposta(a){
        //Só funciona com matrizes quadradas
        let aux = Array.from(a);
        for(let i = 0; i< a.length; i++)
            for(let j = 0; j< a.length; j++)
                aux[i][j]=a[j][i];
        return aux;
    }
}