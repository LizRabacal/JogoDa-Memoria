
var img = new Array();
var img2 = new Array();
var imagem1;
var imagem2;
var imagem3;
var imagem4;
var imagem5;
var imagem6;
var imagem7;
var imagem8;
var imagem9;
var imagem10;
var verso = document.querySelectorAll('.card__face--front');



function Disney() {
  if (!virada) {
    resetarjogo();
    imagem1 = "'img/princess1.jpg'"
    imagem2 = "'img/princess2.jpg'"
    imagem3 = "'img/princess3.jpg'"
    imagem4 = "'img/princess4.jpg'"
    imagem5 = "'img/princess5.jpg'"
    imagem6 = "'img/princess6.jpg'"
    imagem7 = "'img/princess7.jpg'"
    imagem8 = "'img/princess8.jpg'"
    imagem9 = "'img/princess9.jpg'"
    imagem10 = "'img/princess10.jpg'"
    sortearcartas();
    [...verso].forEach((verso) => {
      verso.style.backgroundImage = 'url(img/gifdisney.gif)';
  
      document.querySelector('.timer').innerText = formatTime(min=0) + ':' + formatTime(sec=0);


    });
  }
}


function CN() {
  if (!virada) {
    resetarjogo();
    imagem1 = "'img/CN6.jpg'"
    imagem2 = "'img/CN2.jpg'"
    imagem3 = "'img/CN5.jpg'"
    imagem4 = "'img/CN4.jpg'"
    imagem5 = "'img/CN3.jpg'"
    imagem6 = "'img/CN1.jpg'"
    imagem7 = "'img/CN7.jpg'"
    imagem8 = "'img/CN8.jpg'"
    imagem9 = "'img/CN9.jpg'"
    imagem10 ="'img/CN10.jpg'"
    sortearcartas();
    [...verso].forEach((verso) => {
      verso.style.backgroundImage = 'url(img/gifcartoon2.gif)';
      verso.style.backgroundPosition = 'center';
      document.querySelector('.timer').innerText = formatTime(min=0) + ':' + formatTime(sec=0);
    });
  }
}


function Vingadores() {
  if (!virada) {
    resetarjogo();
    imagem1 = "'img/capitamarvel.jpg'"
    imagem2 = "'img/capitaoamerica.jpg'"
    imagem3 = "'img/homemaranha.jpg'"
    imagem4 = "'img/homemdeferro.jpg'"
    imagem5 = "'img/hulk.jpg'"
    imagem6 = "'img/HomemFormiga.jpg'"
    imagem7 = "'img/thor.jpg'"
    imagem8 = "'img/visao.jpg'"
    imagem9 = "'img/ga.jpg'"
    imagem10 ="'img/nf.jpg'"
    sortearcartas();
    [...verso].forEach((verso) => {
      verso.style.backgroundImage = 'url(img/gifmarvel.gif)';
   
      document.querySelector('.timer').innerText = formatTime(min=0) + ':' + formatTime(sec=0);

    });
  }

}

function _sortear(maximo) {
  var numeros = [];

  for (var numero = 0; numero < maximo; numero++) {

    numeros.push(numero);
  }

  numeros.sort(function randomizar(a, b) {

    return Math.random() * 2 - 1;

  });

  return numeros;
}

function sortearcartas() {
  img[0] = imagem1;
  img[1] = imagem2;
  img[2] = imagem3;
  img[3] = imagem4;
  img[4] = imagem5;
  img[5] = imagem6;
  img[6] = imagem1;
  img[7] = imagem2;
  img[8] = imagem3;
  img[9] = imagem4;
  img[10] = imagem5;
  img[11] = imagem6;
  img[12] = imagem8;
  img[13] = imagem8;
  img[14] = imagem9;
  img[15] = imagem9;
  img[16] = imagem10;
  img[17] = imagem10;
  img[18] = imagem7;
  img[19] = imagem7;

  var numeros = _sortear(20);

  for (var a = 0; a < 20; a++) {
    img2[numeros[a]] = img[a];
  }
  for (var g = 0; g < 20; g++) {
    var a = document.getElementById((g + 1).toString());
    a.style.backgroundImage = `url(${img2[g]})`;
    a.style.backgroundSize = 'cover';
  }
}



var botao1 = document.querySelectorAll('button');



var cards = document.querySelectorAll('.card'); /*pega todos os cards a atribui a uma variavel nodelist*/
var cardscimg = document.querySelectorAll('.card__face--back');/*pega todos os divs com as imagens a atribui a uma variavel  nodelist*/
var cartavirada1;  /*serve pra armazenar a primeira carta clicada*/
var cartavirada12;/*serve pra armazenar a segunda carta clicada*/
var cont = 0; /*variavel q serve para contar se o jogador ta na carta 1 ou 2*/
var virada = false; /*serve pra nao deixar o jogador clicar na carta enquanto duas cartas (nao iguais) estao viradas temporariamente*/
var arraydecards = new Array(); /*array pra armazenar os indices das cartas (iguais) ja viradas*/
var jatem = false; /*serve pra controlar */
var sec=0;
var min =0;
var movements=0;

const formatTime = (value) => {
  return value < 10 ? '0' + value : value;
}

const Timer = () => {
  this.loop = setInterval(() => {
      sec++;
       if (sec === 60) {
          min++;
          sec = 0;
      }
      document.querySelector('.timer').innerText = formatTime(min) + ':' + formatTime(sec);
  }, 1000);
}

function nome() {
  var nome = document.getElementById("inpnome").value;
  sessionStorage.setItem('nomeUsuario', nome); // Armazena o nome do usuário na sessionStorage
  window.location.href = 'jogo.html'; // Redireciona para a página 2
}


const fimJogo = () =>{
  if(arraydecards.length == 20){
    clearInterval(this.loop);
    document.querySelector('#vitoria').style.display = 'block';
    var nome = document.querySelector("#nome1");
    nome.textContent =  localStorage.getItem('nome');
    document.querySelector('#movimentosvitoria').innerHTML = movements;
    document.querySelector('#tempo1').innerHTML = formatTime(min) + ':' + formatTime(sec);
  
  }
  
}

[...cards].forEach((card) => {/*foreach para escutar o evento todos os cards dentro da nodelist*/
  card.addEventListener('click', function () { /*escuta*/
    jatem = false;/*variavel começa falsa*/
    arraydecards.forEach((cardvirado) => {/*percorre os indices das cartas ja viradas(achadas)*/
      if (([...cards].indexOf(card) == cardvirado)) { /*compara cada um com o indice da carta atualmente clicada*/
        jatem = true; /*se a carta clicada for uma carta já achada atribui true para a variavel de controle*/
        
      } 
    });

    if ((!virada) && (!jatem) && (card != cartavirada1)) { /*caso a carta não esteja virada (mas nao tenha sido encontrado seu par ainda) temporariamente, ou não esteja virada por ter sido encontrada*/
      card.classList.toggle('is-flipped'); /*vira a carta*/
      cont++; /*conta a carta q o jogador virou*/
    }
    if ((cont == 1)&&(!jatem)) {
      cartavirada1 = card; /*se ele virou apenas uma carta a carta sera guardada na variavel cartavirada1*/
    } else if (cont == 2) {
      virada = true; /*atribui true a boleana para que o jogador nao possa virar uma carta temporariamente*/
      cartavirada12 = card;/*se ele virou duas cartas a carta sera guardada na variavel cartavirada12*/
      
      setTimeout(function () { /*setTimeout para setar um tempo para oq vai acontecer*/
        /*a proxima linha compara (através de uns métodos) o background-image da cartavirada1 e da cartavirada2 pra checar se sao iguais*/
        if (getComputedStyle(cardscimg.item([...cards].indexOf(cartavirada1))).getPropertyValue("background-image") == getComputedStyle(cardscimg.item([...cards].indexOf(cartavirada12))).getPropertyValue("background-image")) {
          arraydecards.push([...cards].indexOf(cartavirada1)); /*se forem, guarda os index delas no array pra evitar q possa ser virada novamente (pro verso)*/
          arraydecards.push([...cards].indexOf(cartavirada12));
          cartavirada1 = '';
          fimJogo();
        } else  {
          cartavirada1.classList.toggle('is-flipped'); /*se não forem, ambas as cartas são viradas automaticamente pro verso*/
          cartavirada12.classList.toggle('is-flipped');
          cartavirada1 = '';
          movements++;
        }
        virada = false; /*torna a boleana falsa dnv dps do tempinho, para que o jogador possa prosseguir*/
      }, 350);
      cont = 0; /*cont vira zero dnv pois as cartas são comparadas a cada duas viradas*/
  
  }});

  });

  

window.onload = () => {
  Timer();
}


var card1 = false;

function resetarjogo() {
  if(!virada){
  [...cards].forEach((card) => {
    arraydecards.forEach((cardvirado) => {
      if (([...cards].indexOf(card) == cardvirado)) {
        card.classList.toggle('is-flipped');
      }

    });
  });
  if (cont == 1) {
    cartavirada1.classList.toggle('is-flipped');
    cont = 0;
  }
  document.querySelector('.timer').innerText = formatTime(min=0) + ':' + formatTime(sec=0);
  movements = 0;
  cartavirada1 = '';
  arraydecards = []
  sortearcartas();
}

}

CN();

