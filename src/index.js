const btnStart = document.getElementById('btn-start');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');


/*function startProgram(){
  alert('probando');
}*/

const startProgram = () => {
  alert('probando');
}

const encode = () => {
  alert('probando botón cifrar');
}

const decode = () => {
  alert('probando botón descifrar');
}

btnStart.addEventListener('click', startProgram);
btnEncode.addEventListener('click', encode);
btnDecode.addEventListener('click', decode);
