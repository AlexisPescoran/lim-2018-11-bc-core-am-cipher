//Mostrando solo pantalla de incio ("screen-1")
document.getElementById('screen-2').style.display='none';
document.getElementById('screen-3').style.display='none';
//
const btnSeeInstructions = document.getElementById('btn-see-instructions');
const btnGoEncode = document.getElementById('btn-go-encode');
const btnGoDecode = document.getElementById('btn-go-decode');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const btnGoBack1 = document.getElementById('btn-go-back-1');
const btnGoBack2 = document.getElementById('btn-go-back-2');


const txtText1 = document.getElementById('txt-text1');
const txtText2 = document.getElementById('txt-text2');
const txtEncode = document.getElementById('txt-encode');
//const txtDecode = document.getElementById('txt-decode');
const numEncode = document.getElementById('num-encode');
const numDecode = document.getElementById('num-decode');


//Click del botón ver instrucciones
const seeInstructions = () => {
  alert('probando');
}

//Click del botón Volver a inicio 1
goBack1 = () => {
    document.getElementById('screen-2').style.display='none';
    document.getElementById('screen-1').style.display='block';
    clearInputs();
}
//Click del botón Volver a inicio 2
goBack2 = () => {
    document.getElementById('screen-3').style.display='none';
    document.getElementById('screen-1').style.display='block';
    clearInputs();
}

//Creando la función limpiar
clearInputs = () => {
  txtText1.value="";
  numEncode.value="";
  //txtEncode.value="";
  document,getElementById('new').innerHTML="";

  txtText2.value="";
  numDecode.value="";
  txtDecode.value="";
}

//Click del botón cifrar
const actionEncode = () => {
  let texto1 = txtText1.value.toUpperCase();
  let number1 = parseInt(numEncode.value);

  document.getElementById('new').innerHTML = 'Aquí tienes los nombres secretos';
  txtText1.value = cipher.encode(number1,texto1);
}

//Click del botón descifrar
const actionDecode = () => {
  let texto2 = txtText2.value.toUpperCase();
  let number2 = parseInt(numDecode.value);

  txtDecode.value = cipher.decode(number2,texto2);
}

//Eventos de los botones
btnSeeInstructions.addEventListener('click', seeInstructions);
btnEncode.addEventListener('click', actionEncode);
btnDecode.addEventListener('click', actionDecode);
btnGoBack1.addEventListener('click', goBack1);
btnGoBack2.addEventListener('click', goBack2);

btnGoEncode.addEventListener('click', goEncode = () => {
    document.getElementById('screen-1').style.display='none';
    //document.getElementById('screen-3').style.display='none';
    document.getElementById('screen-2').style.display='block';});
btnGoDecode.addEventListener('click', goDecode = () => {
    document.getElementById('screen-1').style.display='none';
    document.getElementById('screen-2').style.display='none';
    document.getElementById('screen-3').style.display='block';
});
