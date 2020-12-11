var img, img2, img3, img4, img5, imag6, song, song2, song3, song4, imgf1, imgf2, imgf3, imgf4, imgf5, imgf6, imgf6, imgf8, imgf9, imgf10; // variável para poder iniciar o processo de utilizar imagem.
var tela = 0 //variável para as telas
var largura = 200; // largura responsável pela dimensão do retangulo dentro do (Iniciar) e do (Informações)
var altura = 40;
var xMenu = 235; //Localização x do menu
var yMenu1 = 90; //Localização y do menu
var yMenu2 = 130;
var nota = 0; //variavel para pontuação de acertos
var xMenu2 = 502;
var soma = 0;
var erro = 0;
var timing;



function preload() {
  img = loadImage('porcentando.png');
  img2 = loadImage('PacMan.png');
  img3 = loadImage('PacGames.png');
  imgf1 = loadImage('Biscoito1.png');
  imgf2 = loadImage('Biscoito2.png');
  imgf3 = loadImage('CremeCracker.png');
  imgf4 = loadImage('1Kg_Laranja.png');
  imgf5 = loadImage('CaixaDeLeite.png');
  imgf6 = loadImage('BarraDeChocolate.png');
  imgf7 = loadImage('BatatinhaFrita.png');
  imgf8 = loadImage('XTudo.png');
  imgf9 = loadImage('Stacker_Triplo.png');
  imgf10 = loadImage('PastaDeAmendoim.png');
  img4 = loadImage('PacManCarregando.png');
  img5 = loadImage('André_Luiz.png');
  img6 = loadImage('Instagram.png');
  song = loadSound('PacMan Original Music.mp3');
  song2 = loadSound('Música_Soletrando.mp3');
  song3 = loadSound('Pac_Man_Game_Over.mp3');
  song4 = loadSound('Aplausos.mp3');
}

function setup() {
  createCanvas(650, 370);
  img.loadPixels();
  c = img.get(img.width, img.height);
  img2.loadPixels();
  c = img2.get(img2.width, img2.height);
  radio = createRadio();
  radio2 = createRadio();
  radio3 = createRadio();
  radio4 = createRadio();
  radio5 = createRadio();
  radio6 = createRadio();
  radio7 = createRadio();
  radio8 = createRadio();
  radio9 = createRadio();
  radio10 = createRadio();
  textStyle(NORMAL);
  song.loop();
  song2.loop();
  song3.loop();
  song4.loop();
}

function draw() {
  if (tela == 0) {
    menu()
  } else if (tela == 1) { //tela de informações;
    fase1()
  } else if (tela == 2) {
    fase2()
  } else if (tela == 3) {
    fase3()
  } else if (tela == 4) {
    fase4()
  } else if (tela == 5) {
    fase5()
  } else if (tela == 6) {
    fase6()
  } else if (tela == 7) {
    fase7()
  } else if (tela == 8) {
    fase8()
  } else if (tela == 9) {
    fase9()
  } else if (tela == 10) {
    fase10()
  } else if (tela == 11) {
    GamerOver()
  } else if (tela == 12) {
    Information()
  } else if (tela == 13) {
    Créditos()
  } else if (tela == 14) {
    Parabéns()
  }

}

function menu() {
  song2.pause();
  song3.pause();
  song4.pause();
  timing = 120;
  image(img, -3, -10, 705.5, 370.5);
  textAlign(CENTER);
  textSize(26);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
    stroke(200);
    noFill();
    rect(xMenu, yMenu1, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 1;
      song.pause();
      song2.play();
    }
  }
  fill(240);
  noStroke();
  text("Iniciar", 335, 120);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
    stroke(200);
    noFill();
    rect(xMenu, yMenu2, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 12;
    }
  }
  fill(240);
  noStroke();
  text("Informações", 335, 160);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 170 && mouseY < 170 + altura) {
    stroke(200);
    noFill();
    rect(xMenu, 170, largura, 40, 15);
    if (mouseIsPressed) {
      tela = 13;
    }
  }
  fill(240);
  noStroke();
  text("Créditos", 335, 200);
}

function fase1() {
  radio.show();
  background(255);
  image(imgf1, -3, -10, 660, 380);
  //informações sobre o jogo
  text("Se um um biscoito é 4 reais,quanto ficaria após um desconto de 30%, neste produto?", 30, 30, 600);
  textSize(17);
  fill(20);
  stroke(250);

  // 4 botões de radio para multipla escolha.

  radio.option('1.97', 'R$ 1.97');
  radio.option('1.89', 'R$ 1.89');
  radio.option('1.20', 'R$ 1.20');
  radio.option('2.80', 'R$ 2.80');
  radio.style('width', '80px');
  radio.position(30, 280)
  radio.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val = radio.value();
  if (val === '2.80') {
    radio.hide();
    tela = 2;
    timing = 120; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val === '1.20' || val === '1.89' || val === '1.97') { //se o timing chegar a 0
      tela = 11;
      radio.hide();
      song3.play();
      radio.remove(val);
    }
  }
  text(timing, 600, 340);

}

function fase2() {
  radio2.show();
  background(255);
  image(imgf2, -3, -10, 600, 380);
  text("Se um um biscoito é 3.60 reais,quanto ficaria após um desconto de 45%, neste produto?", 30, 30, 600);
  textSize(17); //tamanho da letra 

  radio2.option('1.99', 'R$ 1.99');
  radio2.option('2.54', 'R$ 2.54');
  radio2.option('1.98', 'R$ 1.98');
  radio2.option('1.87', 'R$ 1.87');
  radio2.style('width', '80px');
  radio2.position(20, 290);
  radio2.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val2 = radio2.value();
  if (val2 === '1.98') {
    radio2.hide();
    tela = 3;
    timing = 157; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val2 === '1.99' || val2 === '2.54' || val2 === '1.87') { //se o timing chegar a 0
      tela = 11;
      radio2.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);

}

function fase3() {
  radio3.show();
  background(255);
  image(imgf3, -10, -10, 700, 380);
  text("Se um creme crack é R$ 4,99 ,quanto ficaria após um desconto de 39%, neste produto?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio.hide(); // função utilizada para esconder os valores da tela 1, para não haver sobreposição dos valores da tela 2 com a tela 3.
  radio3.option('4.20', 'R$ 4.20');
  radio3.option('3.60', 'R$ 3.60');
  radio3.option('2.97', 'R$ 2.97');
  radio3.option('3.04', 'R$ 3.04');
  radio3.style('width', '80px');
  radio3.position(30, 280);
  radio3.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val3 = radio3.value();
  if (val3 === '3.04') {
    tela = 4;
    radio3.hide();
    timing = 154; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val3 === '4.20' || val3 === '3.60' || val3 === '2.97') { //se o timing chegar a 0
      tela = 11;
      radio3.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function fase4() {
  radio4.show();
  background(255);
  image(imgf4, -10, -10, 650, 380);
  fill(10);
  stroke(0);
  text("Se 1 Kg de laranja é R$ 2.60 ,quanto seria o valor aproximado deste produto após um desconto de 17%?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio4.option('2.16', 'R$ 2.16');
  radio4.option('2.59', 'R$ 2.59');
  radio4.option('1.89', 'R$ 1.89');
  radio4.option('1.65', 'R$ 1.65');
  radio4.style('width', '80px');
  radio4.position(30, 290);
  radio4.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val4 = radio4.value();
  if (val4 === '2.16') {
    tela = 5;
    radio4.hide();
    timing = 151; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val4 === '2.59' || val4 === '1.89' || val4 === '1.65') { //se o timing chegar a 0
      tela = 11;
      radio4.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);

}

function fase5() {
  radio5.show();
  background(255);
  image(imgf5, -10, -10, 650, 380);
  text("Se uma caixa de leite é R$ 4.90 ,qual seria o valor  aproximado deste produto após um desconto de 17% mais outro desconto posterior de 13%, neste produto?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio5.option('3.80', 'R$ 3.80');
  radio5.option('3.55', 'R$ 3.55');
  radio5.option('2.96', 'R$ 2.96');
  radio5.option('1.79', 'R$ 1.79');
  radio5.style('width', '80px');
  radio5.position(30, 280);
  radio5.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val5 = radio5.value();
  if (val5 === '3.55') {
    tela = 6;
    radio5.hide();
    timing = 148; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val5 === '3.80' || val5 === '2.96' || val5 === '1.79') { //se o timing chegar a 0
      tela = 11;
      radio5.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function fase6() {
  radio6.show();
  background(255);
  image(imgf6, 13, -10, 600, 380);
  text("Se uma barra de chocolate custa R$ 3.99 ,qual seria o valor  aproximado deste produto após um desconto de 30% ,e um aumento posterior de 14%?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio6.option('4.24', 'R$ 4.24');
  radio6.option('3.19', 'R$ 3.19');
  radio6.option('2.29', 'R$ 2.29');
  radio6.option('4.47', 'R$ 4.47');
  radio6.style('width', '80px');
  radio6.position(30, 280);
  radio6.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val6 = radio6.value();
  if (val6 === '3.19') {
    tela = 7;
    radio6.hide();
    timing = 145; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val6 === '4.24' || val6 === '2.29' || val6 === '4.47') { //se o timing chegar a 0
      tela = 11;
      radio6.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);

}

function fase7() {
  radio7.show();
  background(255);
  image(imgf7, 13, -10, 650, 380);
  text("Se uma batatinha frita custa R$ 6 ,qual seria o valor  aproximado deste produto após um desconto de 5% ,e um aumento posterior de 2%?", 30, 70, 600);
  textSize(17); //tamanho da letra 
  radio7.option('5.24', 'R$ 5.24');
  radio7.option('4.19', 'R$ 4.19');
  radio7.option('5.82', 'R$ 5.82');
  radio7.option('4.47', 'R$ 4.47');
  radio7.style('width', '80px');
  radio7.position(30, 280);
  radio7.value();

  if (mouseX > xMenu2 && mouseX < xMenu2 + 105 && mouseY > 241 && mouseY < 241 + 35) { // detectar se o mouse passou pela região.
    stroke(40);
    fill(40);
  }
  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val7 = radio7.value();
  if (val7 === '5.82') {
    tela = 8;
    radio7.hide();
    timing = 142; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val7 === '4.19' || val7 === '4.47' || val7 === '5.24') { //se o timing chegar a 0
      tela = 11;
      radio7.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function fase8() {
  radio8.show();
  background(255);
  image(imgf8, 13, -10, 650, 380);
  text("Se um XTudo custa R$ 6.5 ,qual seria o valor  aproximado deste produto após um desconto de 13% ,e  outro posterior de 2%?", 30, 30, 500);
  fill('black')
  stroke(1)
  textSize(17); //tamanho da letra 
  radio8.option('4.8', 'R$ 4.8');
  radio8.option('5.3', 'R$ 5.3');
  radio8.option('4.5', 'R$ 4.5');
  radio8.option('3.4', 'R$ 3.4');
  radio8.style('width', '80px');
  radio8.position(15, 200);
  radio8.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val8 = radio8.value();
  if (val8 === '5.3') {
    tela = 9;
    radio8.hide();
    timing = 139; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val8 === '4.8' || val8 === '4.5' || val8 === '3.4') { //se o timing chegar a 0
      tela = 11;
      radio8.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function fase9() {
  radio9.show();
  background(255);
  image(imgf9, 13, -10, 650, 380);
  text("Se um Combo de Stacker Triplo com batata pequena custa R$ 24.90 ,qual seria o valor  aproximado deste produto após um desconto de 18%?", 30, 30, 600);
  fill(20);
  textSize(17); //tamanho da letra 
  radio9.option('21.3', 'R$ 21.3');
  radio9.option('20.1', 'R$ 20.1');
  radio9.option('19.8', 'R$ 19.8');
  radio9.option('20.4', 'R$ 20.4');
  radio9.style('width', '80px');
  radio9.position(30, 280);
  radio9.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val9 = radio9.value();
  if (val9 === '20.4') {
    tela = 10;
    radio9.hide();
    timing = 136; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val9 === '21.3' || val9 === '20.1' || val9 === '19.8') { //se o timing chegar a 0
      tela = 11;
      radio9.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function fase10() {
  radio10.show();
  background(255);
  image(imgf10, 53, -10, 500, 400);
  text("Se uma pasta de amendoim de 1kg custa R$ 20 ,qual seria o valor  aproximado deste produto após um desconto de 5%, e outro desconto de 27%?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio10.option('14.2', 'R$ 14.2');
  radio10.option('16.1', 'R$ 16.1');
  radio10.option('13.6', 'R$ 13.6');
  radio10.option('12.4', 'R$ 12.4');
  radio10.style('width', '80px');
  radio10.position(30, 280);
  radio10.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val10 = radio10.value();
  if (val10 === '13.6') {
    tela = 14;
    radio10.hide();
    song4.play();
    timing = 33; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val10 === '14.2' || val10 === '16.1' || val10 === '12.4') { //se o timing chegar a 0
      tela = 11;
      radio10.hide();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function GamerOver() {
  song2.stop();
  image(img2, -3, -10, 660, 370);
  textSize(20)
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 211 && mouseY < 211 + altura) {
    stroke(250);
    noFill()
    rect(211, 230, 170, 32, 20);
    if (mouseIsPressed) {
      tela = 0;
      erro = 0;
      val = 0;
      song3.stop();
      song.play();
    }
  }
  fill('SlateBlue');
  noStroke();
  text("Retorno ao Menu ", 300, 256);
}

function Information() {
  background(250);
  image(img4, -3, -10, 660, 370);
  text("Para haver o progresso de fases, há  necessidade de acertar o valor correto.Todavia ocorra o esgotamento do tempo, o jogador será redirecionado automáticamente para a tela de GameOVER", 190, 20, 300)
  text("Um jogo em formato de  Quiz envolvendo cálculo de porcentagem sobre comidas.", 190, 170, 300);
  text("(EF08MA04) Resolver e elaborar problemas, envolvendo cálculo de porcentagens, incluindo o uso de tecnologias digitais", 190, 205, 300);
  textSize(15);
  textAlign(CENTER);
  if (mouseX > 10 && mouseX < 10 + 80 && mouseY > 20 && mouseY < 20 + 35) {
    stroke(10);
    noFill()
    rect(10, 20, 80, 35, 20);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  fill(4)
  stroke(4);
  text("Esc", 50, 45);
}

function Créditos() {
  background(250);
  image(img5, 0, 90, 250, 250);
  //image(img6, 580, 10, 80, 60);
  text("Projeto educacional da UFRN, Referente a matéria Lógica de programação (LOP). Créditos referente ao criador e programador do projeto, André Luiz Lima Souza estudante do segundo período de C&T.", 270, 150, 302);
  textSize(17);
  if (mouseX > 10 && mouseX < 10 + 80 && mouseY > 20 && mouseY < 20 + 35) {
    stroke(10);
    noFill()
    rect(10, 20, 80, 35, 20);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  fill(40)
  stroke(4);
  text("Esc", 50, 45);
  fill(10);
}

function Parabéns() {
  song2.pause();
  background(200);
  text("Parabéns pelo  termino do jogo!", 330, 100);
  text("Para recomeçar o jogo, basta pressionar o Botão Esc, e você será redirecionado para o menu", 200, 150, 250)
  textSize(15)
  if (mouseX > 10 && mouseX < 10 + 80 && mouseY > 20 && mouseY < 20 + 35) {
    stroke(10);
    noFill()
    rect(10, 20, 80, 35, 20);
    if (mouseIsPressed) {
      tela = 0;
      song.play();
    }
  }
  fill(4)
  stroke(4);
  text("Esc", 50, 45);
}