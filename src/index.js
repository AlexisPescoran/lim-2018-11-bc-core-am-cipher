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
const txtDecode = document.getElementById('txt-decode');
const numEncode = document.getElementById('num-encode');
const numDecode = document.getElementById('num-decode');


//Click del botón ver instrucciones
const seeInstructions = () => {
  document.getElementById("l1").innerHTML="* Si quieres ocultar la lista de los participantes, dale click en &quotcubrir&quot";
  document.getElementById("l2").innerHTML="* Si quieres descubrir quien es tu amigo secreto, dale click en &quotdescubrir&quot"
}
//Click del botón cifrar
const actionEncode = () => {
  let texto = txtText1.value.toUpperCase();
  let number = parseInt(numEncode.value);

  if(numEncode.value==="" || txtText1.value===""){
    alert('Verifica que hayas ingresado correctamente los datos');
  }else {
    document.getElementById('who').innerHTML="";
    document.getElementById('new').innerHTML = 'Aquí tienes los nombres secretos';
    txtText1.value = cipher.encode(number,texto);
  }
}

//Click del botón descifrar
const actionDecode = () => {
  let texto = txtText2.value.toUpperCase();
  let number = parseInt(numDecode.value);

  if(numDecode.value ===""||txtText2.value ==="")
  {
    alert('Verifica que hayas ingresado correctamente los datos');
  }else{
    txtDecode.value = cipher.decode(number,texto);
  }
}

//Click del botón Volver a inicio 1
const goBack1 = () => {
    document.getElementById('screen-2').style.display='none';
    document.getElementById('screen-1').style.display='block';
    clearInputs();
}
//Click del botón Volver a inicio 2
const goBack2 = () => {
    document.getElementById('screen-3').style.display='none';
    document.getElementById('screen-1').style.display='block';
    clearInputs();
}

//Creando la función limpiar
const clearInputs = () => {
  txtText1.value="";
  numEncode.value="";
  //txtEncode.value="";
  document.getElementById('new').innerHTML="";
  document.getElementById('l1').innerHTML="";
  document.getElementById('l2').innerHTML="";

  txtText2.value="";
  numDecode.value="";
  txtDecode.value="";
}

const goEncode = () => {
    document.getElementById('screen-1').style.display='none';
    //document.getElementById('screen-3').style.display='none';
    document.getElementById('screen-2').style.display='block';
}
const goDecode = () => {
    document.getElementById('screen-1').style.display='none';
    document.getElementById('screen-2').style.display='none';
    document.getElementById('screen-3').style.display='block';
}


//Eventos de los botones
btnSeeInstructions.addEventListener('click', seeInstructions);
btnEncode.addEventListener('click', actionEncode);
btnDecode.addEventListener('click', actionDecode);
btnGoBack1.addEventListener('click', goBack1);
btnGoBack2.addEventListener('click', goBack2);
btnGoEncode.addEventListener('click', goEncode );
btnGoDecode.addEventListener('click', goDecode );
