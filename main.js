let corDoBotao = document.getElementsByClassName('botaoDaInformacao');
let titulo = document.getElementsByClassName('tituloDaInformacao');
let tagCorpo = document.getElementById('corpo');
let setaEsquerda = document.getElementsByClassName('setaEsquerda');
let setaDireita = document.getElementsByClassName('setaDireita');
let clicks = 0;

function mundarDireita() {
  if (clicks == 0) {
    setaEsquerda[0].style.opacity = 1;
    
    tagCorpo.classList.remove('imagemFundo1');
    tagCorpo.classList.add('imagemFundo2');
    corDoBotao[0].style.color = '#D9DD10';
    titulo[0].innerHTML = 'Titulo imagem 2';
    clicks = clicks + 1;
  } else if (clicks == 1) {
    
    tagCorpo.classList.remove('imagemFundo2');
    tagCorpo.classList.add('imagemFundo3');
    corDoBotao[0].style.color = '#A63A17';
    titulo[0].innerHTML = 'Titulo imagem 3';
    clicks = clicks + 1;
  } else if (clicks == 2) {
    setaDireita[0].style.opacity = 0.5;
    tagCorpo.classList.remove('imagemFundo3');
    tagCorpo.classList.add('imagemFundo4');
    corDoBotao[0].style.color = '#10ACDD';
    titulo[0].innerHTML = 'Titulo imagem 4';
    clicks = clicks + 1;
  } else{

  }
}

function mundarEsquerda(){
  if (clicks == 1) {
    setaEsquerda[0].style.opacity = 0.5;
    
    tagCorpo.classList.remove('imagemFundo2');
    tagCorpo.classList.add('imagemFundo1');
    corDoBotao[0].style.color = '#C50000';
    titulo[0].innerHTML = 'Titulo imagem 1';
    clicks = clicks - 1;
  } else if (clicks == 2) {
    
    tagCorpo.classList.remove('imagemFundo3');
    tagCorpo.classList.add('imagemFundo2');
    corDoBotao[0].style.color = '#D9DD10';
    titulo[0].innerHTML = 'Titulo imagem 2';
    clicks = clicks - 1;
  } else if (clicks == 3) {
    setaDireita[0].style.opacity = 1;
    tagCorpo.classList.remove('imagemFundo4');
    tagCorpo.classList.add('imagemFundo3');
    corDoBotao[0].style.color = '#A63A17';
    titulo[0].innerHTML = 'Titulo imagem 3';
    clicks = clicks - 1;
  } else{

  }
}
