const btnStart = document.getElementById('btn-start');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');

const txtText1 = document.getElementById('txt-text1');
const txtText2 = document.getElementById('txt-text2');
const txtEncode = document.getElementById('txt-encode');
const txtDecode = document.getElementById('txt-decode');


/*function startProgram(){
  alert('probando');
}*/

const startProgram = () => {
  alert('probando');
}

const actionEncode = () => {
  let texto1 = txtText1.value;
  txtEncode.value = texto1;

}

const actionDecode = () => {
  let texto2 = txtText2.value;
  txtDecode.value = texto2;

}

btnStart.addEventListener('click', startProgram);
btnEncode.addEventListener('click', actionEncode);
btnDecode.addEventListener('click', actionDecode);
