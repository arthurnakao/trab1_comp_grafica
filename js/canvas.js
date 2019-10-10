window.onload = function () {

    //Declarando o canvas e o context
    canvas = document.getElementById("canvas-1");
    ctx = canvas.getContext("2d");

    var matrizaux = new Matrizes();

    //variaveis das coordenadas da estrela 2d
    coord_star_2d = [[425 / 10, 0, 50 / 10],
    [295 / 10, 270 / 10, 50 / 10],
    [0, 310 / 10, 50 / 10],
    [213 / 10, 513 / 10, 50 / 10],
    [160 / 10, 805 / 10, 50 / 10],
    [425 / 10, 667 / 10, 50 / 10],
    [690 / 10, 805 / 10, 50 / 10],
    [635 / 10, 513 / 10, 50 / 10],
    [850 / 10, 310 / 10, 50 / 10],
    [555 / 10, 270 / 10, 50 / 10],
    [425 / 10, 0, 400 / 10],
    [295 / 10, 270 / 10, 400 / 10],
    [0, 310 / 10, 400 / 10],
    [213 / 10, 513 / 10, 400 / 10],
    [160 / 10, 805 / 10, 400 / 10],
    [425 / 10, 667 / 10, 400 / 10],
    [690 / 10, 805 / 10, 400 / 10],
    [635 / 10, 513 / 10, 400 / 10],
    [850 / 10, 310 / 10, 400 / 10],
    [555 / 10, 270 / 10, 400 / 10]]
    arest_star_2d = [[0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [9, 0],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [15, 16],
    [16, 17],
    [17, 18],
    [18, 19],
    [19, 10],
    [0, 10],
    [1, 11],
    [2, 12],
    [3, 13],
    [4, 14],
    [5, 15],
    [6, 16],
    [7, 17],
    [8, 18],
    [9, 19]]
    fac_star_2d = [] //A estrela ainda não tem as declarações de faces

    //Estrela
    forma_estrela_2d = new Forma(coord_star_2d, arest_star_2d, fac_star_2d);

    //Projetando a imagem
    projetor = new Projetor(ctx, [forma_estrela_2d], null);


    // matriz_tilt = [[Math.cos(Math.PI / 3), (Math.cos(Math.PI / 4) * Math.cos(Math.PI / 4)), -(Math.cos(Math.PI / 4)) * Math.cos(Math.PI / 3), 0],
    // [0, Math.cos(Math.PI / 3), Math.cos(Math.PI / 4), 0],
    // [Math.cos(Math.PI / 4), -(Math.cos(Math.PI / 4) * Math.cos(Math.PI / 3)), Math.cos(Math.PI / 3) * Math.cos(Math.PI / 3), 0],
    // [0, 0, 0, 1]]
    matrix_tilt = [[1,0,0,0],
                   [0,1,0.8,0],
                   [0,0,0.8,0],
                   [0,0,0,1]]
    forma_estrela_2d.transformar_2d(matrix_tilt);
    console.log(forma_estrela_2d)

    //Colocando coordenada homogênea nos vetores da Forma
    for (var i = 0; i < forma_estrela_2d.coordenadas.length; i++) {
        forma_estrela_2d.coordenadas[i][3] = 1;
    }
    console.log(forma_estrela_2d)


    //escala = new Escala([[0.5, 0, 0, 0], [0, 0.5, 0, 0], [0, 0, 0.5, 0], [0, 0, 0, 1]], 0, 200);
    //translacao = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [400, 400, 400, 1]], 0, 500)
    //cizalhamento = new Cizalhamento([[1, 0.1, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 0, 24)
    //translacao2 = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [4000, 2000, 4000, 1]], 0, 1000)
    //escala2 = new Escala([[0.1, 0, 0, 0], [0, 0.1, 0, 0], [0, 0, 0.1, 0], [0, 0, 0, 1]], 0, 50);
    //console.log(escala.criadorDeInbetween())
    //var x = 1;
    //var x1 = 1;
    //var z = escala.criadorDeInbetween();
    //var z2 = translacao.criadorDeInbetween();
    //var z3 = cizalhamento.criadorDeInbetween();
    //var z4 = translacao2.criadorDeInbetween();
    //var total = [z3, z2]

    var x = 1;
    var matrizaux = new Matrizes();
    translacao = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [150, 0, 0, 1]], 0, 150);
    translacao2 = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 400, 0, 1]], 0, 150);
    cisalhamento = new Cizalhamento([[1, 2, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 0, 50);
    escala = new Escala([[1, 0, 0, 0], [0, 0.5, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 130, 150);
    var teste = [translacao, translacao2, escala];
    var total = [translacao.criadorDeInbetween(), translacao2.criadorDeInbetween(), escala.criadorDeInbetween()];


    function animacao() {
        var aux =[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
        for(var i = 0; i<total.length;i++){
            if(total[i][x] != undefined) {
                aux = matrizaux.multiplicacao(aux,total[i][x]);
            }

            //FAZ COM QUE CADA TRANSFORMAÇÃO DA ESTRELA SEJA ARMAZENADAS
            //FAZ COM QUE CADA TRANSFORMAÇÃO DA ESTRELA SEJA ARMAZENADAS
            //FAZ COM QUE CADA TRANSFORMAÇÃO DA ESTRELA SEJA ARMAZENADAS
            //Se a transformação for de translação
            if(teste[i].constructor.name == "Translacao" && total[i][x] != undefined) {
                var passo = teste[i].fim - teste[i].inicio;
                
                //Se houver alguma transformação no eixo x
                if(total[i][x][3][0] != 0) {
                    forma_estrela_2d.dist_x += teste[i].matrizDeTransformacao[3][0] / passo;
                }
                //Se houver alguma transofmação no eixo y
                if(total[i][x][3][1]) {
                    forma_estrela_2d.dist_y += teste[i].matrizDeTransformacao[3][1] / passo;
                }
                //Se houver alguma transformação no eixo z
                if(total[i][x][3][2]) {
                    forma_estrela_2d.dist_z += teste[i].matrizDeTransformacao[3][2] / passo;
                }
            }
            
        }
        
        //Movendo a estrela para o (0, 0) para poder fazer a transformação
        translacao_antes_transformar = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [-forma_estrela_2d.dist_x, -forma_estrela_2d.dist_y, -forma_estrela_2d.dist_z, 1]]
        forma_estrela_2d.coordenadas = matrizaux.multiplicacao(forma_estrela_2d.coordenadas, translacao_antes_transformar)

        //Aplicando as transformações
        forma_estrela_2d.a1 = matrizaux.multiplicacao(forma_estrela_2d.coordenadas,aux)
        x = x + 1;

        //Movendo a estrela de volta para sua posição atual depois da transformação
        translacao_depois_transformar = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [forma_estrela_2d.dist_x, forma_estrela_2d.dist_y, forma_estrela_2d.dist_z, 1]]
        forma_estrela_2d.coordenadas = matrizaux.multiplicacao(forma_estrela_2d.coordenadas, translacao_depois_transformar)

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("oi")
        projetor.projetar();
    }

    setInterval(animacao, 41.6666666667) //A função é executada em cada frame, tendo cada frame o valor de 1/24 segundos

}