window.onload = function () {

    //Declarando o canvas e o context
    canvas = document.getElementById("canvas-1");
    ctx = canvas.getContext("2d");

    var matrizaux = new Matrizes();

    //variaveis das coordenadas da estrela 2d
    /*coord_star_2d = [[425, 10, 50],
                    [125, 10, 50],
                    [10, 125, 50],
                    [310, 225, 50],
                    [600, 125, 50],
                    [425, 10, 150],
                    [125, 10, 150],
                    [10, 125, 150],
                    [310, 225, 150],
                    [600, 125, 150],]*/

    coord_star_2d = [
        [10, 120, 0], //Esquerda
        [165, 0, 0], //Cima
        [325, 120, 0], //Direita
        [265, 310, 0], //Abaixo Direita
        [62, 310, 0], //Abaixo Esquerda

        [10, 120, 50], //Esquerda
        [165, 0, 50], //Cima
        [325, 120, 50], //Direita
        [265, 310, 50], //Abaixo Direita
        [62, 310, 50], //Abaixo Esquerda
    ]

    /*arest_star_2d = [[0, 1],
                    [1, 2],
                    [2, 3],
                    [3, 4],
                    [4, 0],
                    [5, 6],
                    [6, 7],
                    [7, 8],
                    [8, 9],
                    [9, 5],
                    [0, 5],
                    [1, 6],
                    [2, 7],
                    [3, 8],
                    [4, 9],]*/

    arest_star_2d = [
        [1, 0], //Liga Cima e Esquerda
        [0, 4], //Liga Esquerda e Abaixo Esquerda
        [4, 3], //Liga Abaixo Esquerda e Abaixo Direita
        [3, 2], //Liga Abaixo Direita e Direita
        [2, 1],  //Liga Direita e Cima
        //Declarações das areastas da parte da estrela que tem z = 0

        [6, 5], //Liga Cima e Esquerda
        [5, 9], //Liga Esquerda e Abaixo Esquerda
        [9, 8], //Liga Abaixo Esquerda e Abaixo Direita
        [8, 7], //Liga Abaixo Direita e Direita
        [7, 6], //Liga Direita e Cima
        //Declarações das arestas da parte da estrela que tem z = 50

        [0, 5], //Aresta da Esquerda
        [1, 6], //Aresta de Cima
        [2, 7], //Aresta Direita
        [3, 8], //Aresta Abaixo Direita
        [4, 9], //Aresta Abaixo Esquerda
    ]

    /*fac_star_2d = fac_star_2d = [[0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 1, 5, 6],
    [1, 2, 6, 7],
    [2, 3, 7, 8],
    [3, 4, 8, 9],
    [0, 4, 5, 9]]*/
    
    fac_star_2d = [
        [0, 1, 2, 3, 4],
        [9, 8, 7, 6, 5],
        [10, 0, 11, 5], //Face Cima e Esquerda
        [14, 1, 10, 6], //Face Abaixo Esquerda e Esquerda
        [13, 3, 14, 7], //Face Abaixo Direita e Abaixo Esquerda
        [12, 3, 13, 8], //Face Direita e Abaixo Direita
        [11, 4, 12, 9]
    ]

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

    var normal = forma_estrela_2d.normal_plano()
    this.console.log(normal)

    //projetor.projetar()
    projetor.desenhaFinal(forma_estrela_2d)
    //projetor.desenhar_linhas(forma_estrela_2d)
    

    
    //Colocando coordenada homogênea nos vetores da Forma

    /*
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
/*
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
/*
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        projetor.projetar();
        
    }

    setInterval(animacao, 41.6666666667) //A função é executada em cada frame, tendo cada frame o valor de 1/24 segundos
*/
}
