const btnStart = document.getElementById('btn-start');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');

const txtText1 = document.getElementById('txt-text1');
const txtText2 = document.getElementById('txt-text2');
const txtEncode = document.getElementById('txt-encode');
const txtDecode = document.getElementById('txt-decode');
const numEncode = document.getElementById('num-encode');
const numDecode = document.getElementById('num-decode');

//Click del botón empezar
const startProgram = () => {
  alert('probando');
}
//Click del botón cifrar
const actionEncode = () => {
  let texto1 = txtText1.value;
  let number1 = parseInt(numEncode.value);

  txtEncode.value = cipher.encode(number1,texto1);
  //alert(cipher.encode(number1,texto1));
}
//Click del botón descifrar
const actionDecode = () => {
  let texto2 = txtText2.value;
  let number2 = parseInt(numDecode.value);

  txtDecode.value = cipher.decode(number2,texto2);
}


//Eventos de los botones
btnStart.addEventListener('click', startProgram);
btnEncode.addEventListener('click', actionEncode);
btnDecode.addEventListener('click', actionDecode);
