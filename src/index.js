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
const btnAddType = document.getElementById('btn-add-type');
const btnAddModel = document.getElementById('btn-add-model');
const btnAddUnits = document.getElementById('btn-add-units');
const btnAddCost = document.getElementById('btn-add-cost');
const btnAddSale = document.getElementById('btn-add-sale');
const btnShowList = document.getElementById('btn-show-list');

//const txtText1 = document.getElementById('txt-text1');
const txtText2 = document.getElementById('txt-text2');
const txtEncode = document.getElementById('txt-encode');
const txtDecode = document.getElementById('txt-decode');
const numEncode = document.getElementById('num-encode');
const numDecode = document.getElementById('num-decode');
const txtType = document.getElementById('txt-type');
const txtModel = document.getElementById('txt-model');
const txtUnits = document.getElementById('txt-units');
const txtCost = document.getElementById('txt-cost');
const txtSale = document.getElementById('txt-sale');


//Variables globales de los arrays
let arrayType = []; let arrayModel = []; let arrayUnits = []; let arrayCost = []; let arraySale = [];
//Click del botón ver instrucciones
const seeInstructions = () => {
  alert('probando');
}

//Click del boton añadir Tipo
addType = () =>{
  arrayType.push(txtType.value);
  txtType.value = '';
}

//Clic del botón añadir Modelo
addModel = () =>{
  arrayModel.push(txtModel.value);
  txtModel.value = '';
}

//Click del botón mostrar lista
showList = () =>{
  for(let i=0; i<arrayType.length; i++){
    txtEncode.value=arrayType[i];
    console.log(arrayType[i]);
  }
  for(let i=0; i<arrayModel.length; i++){
    txtEncode.value=arrayModel[i];
    console.log(arrayModel[i]);
  }
  txtEncode.value=arrayModel;
  txtEncode.value=arrayType; //se quedó con lo último
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
  numEncode.value="";
  txtEncode.value="";

  txtText2.value="";
  numDecode.value="";
  txtDecode.value="";
}

//Click del botón cifrar
const actionEncode = () => {
  /*let texto1 = txtText1.value.toUpperCase();
  let number1 = parseInt(numEncode.value);

  txtEncode.value = cipher.encode(number1,texto1);*/
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
btnAddType.addEventListener('click', addType);
btnAddModel.addEventListener('click', addModel);
btnAddUnits.addEventListener('click', addUnits = () =>{alert('probando3');});
btnAddCost.addEventListener('click', addCost = () =>{alert('probando4');});
btnAddSale.addEventListener('click', addSale = () =>{alert('probando5');});
btnShowList.addEventListener('click', showList);

btnGoEncode.addEventListener('click', goEncode = () => {
    document.getElementById('screen-1').style.display='none';
    //document.getElementById('screen-3').style.display='none';
    document.getElementById('screen-2').style.display='block';});
btnGoDecode.addEventListener('click', goDecode = () => {
    document.getElementById('screen-1').style.display='none';
    document.getElementById('screen-2').style.display='none';
    document.getElementById('screen-3').style.display='block';
});
