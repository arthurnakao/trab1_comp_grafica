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

    //Colocando coordenada homogênea nos vetores da Forma
    for (var i = 0; i < forma_estrela_2d.coordenadas.length; i++) {
        forma_estrela_2d.coordenadas[i][3] = 1;
    }

    var x = 1;
    translacao1 = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [300, 0, 0, 1]], 0,24);
    //translacao3 = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [150, 0, 0, 1]], 25,48);
    //translacao4 = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, -400, 0, 1]], 24,48);
    cisalhamento1 = new Cizalhamento([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 200, 250);
    //cisalhamento2 = new Cizalhamento([[1, 2, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 200, 250);
    escalaX = new Escala([[0.5, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],0, 24);
    escalaX2 = new Escala([[2, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],48, 72);
    escalaY = new Escala([[1, 0, 0, 0], [0, 0.5, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 24, 48);
    
    translacaoA = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [100, 200, 0, 1]], 72,125);
    escalaA = new Escala([[1, 0, 0, 0], [0, 0.5, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 125, 150); 
    escalaB = new Escala([[1, 0, 0, 0], [0, 3, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 150, 170); 
    cisalhamentoA = new Cizalhamento([[1, 0.5, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 170, 220);
    cisalhamentoB = new Cizalhamento([[1, 0, 0, 0], [0.5, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 170, 220);

    var total = [


        translacao1.criadorDeInbetween(), 
        //translacao3.criadorDeInbetween(),
        //translacao4.criadorDeInbetween(),
        escalaX.criadorDeInbetween(), 
        escalaX2.criadorDeInbetween(), 
        escalaY.criadorDeInbetween(), 
        cisalhamento1.criadorDeInbetween(),
        translacaoA.criadorDeInbetween(),
        escalaA.criadorDeInbetween(),
        escalaB.criadorDeInbetween(),
        cisalhamentoA.criadorDeInbetween(),
        cisalhamentoB.criadorDeInbetween()
     

    ];

    var t = [escalaX, 
        escalaY, 
        escalaX2,

        translacao1, 
        //translacao3,
        //translacao4,
        cisalhamento1,
        translacaoA,
        escalaA,
        escalaB,
        cisalhamentoB,
        cisalhamentoA
    ];

    function animacao() {
        aux =[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
        a = false;
        let menor_x = forma_estrela_2d.coordenadas[0][0];
        let menor_y = forma_estrela_2d.coordenadas[0][1];
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
            if (forma_estrela_2d.coordenadas[i][0]<menor_x)
            menor_x = forma_estrela_2d.coordenadas[i][0];
            if (forma_estrela_2d.coordenadas[i][1]<menor_y)
            menor_y = forma_estrela_2d.coordenadas[i][1];
        }
        forma_estrela_2d.a1 = matrizaux.multiplicacao(forma_estrela_2d.coordenadas,[[1,0,0,0],[0,1,0,0],[0,0,1,0],[-menor_x,-menor_y,-forma_estrela_2d.z,1]])
        console.log(aux)
        for(var i = 0; i<total.length;i++){
            if(total[i][x] != undefined) {
                aux = matrizaux.multiplicacao(aux,total[i][x]);
            }
        }

        
/*      aux = matrizaux.multiplicacao(aux,total[i][x]);
        let menor_x = forma_estrela_2d.a1[0][0];
        let menor_y = forma_estrela_2d.a1[0][1];
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
            if (forma_estrela_2d.a1[i][0]<menor_x)
            menor_x = forma_estrela_2d.a1[i][0];
            if (forma_estrela_2d.a1[i][1]<menor_y)
            menor_y = forma_estrela_2d.a1[i][1];
        }
*/

/*           
        //Movendo a estrela para o (0, 0) para poder fazer a transformação
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
            forma_estrela_2d.a1[i][0] -= menor_x;
            forma_estrela_2d.a1[i][1] -= menor_y;
        }
*/
        //Aplicando as transformações

        forma_estrela_2d.a1 = matrizaux.multiplicacao(forma_estrela_2d.a1,aux)
        forma_estrela_2d.a1 = matrizaux.multiplicacao(forma_estrela_2d.a1,[[1,0,0,0],[0,1,0,0],[0,0,1,0],[menor_x,menor_y,forma_estrela_2d.z,1]])


        for(var i = 0; i<t.length;i++){
            if(t[i].fim == x ){
                forma_estrela_2d.coordenadas = forma_estrela_2d.a1;
            }
        }
        x = x + 1;


/*  
        //Movendo a estrela de volta para sua posição atual depois da transformação
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
           forma_estrela_2d.a1[i][0] += menor_x;
           forma_estrela_2d.a1[i][1] += menor_y;
        }
*/

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        projetor.projetar();
        
    }

    setInterval(animacao, 41.6666666667) //A função é executada em cada frame, tendo cada frame o valor de 1/24 segundos

}
