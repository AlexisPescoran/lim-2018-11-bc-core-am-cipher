window.cipher = {
  // ...
 encode: (offset, string) => {
   let mensaje = "";

  for(let i=0 ; i<string.length ; i++){

    if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
      let newAscciPosition = (((string[i].charCodeAt() -65) +offset) %26) +65;
      let newChar = String.fromCharCode(newAscciPosition);
      mensaje = mensaje + newChar;
    }else {
      mensaje = mensaje + string[i];
    }
  }
   return mensaje;
 },
 decode: (offset, string) => {
   let mensaje = "";

    for(let i=0 ; i<string.length ; i++){
     if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
       let newAscciPosition = (((string[i].charCodeAt() -90 ) -offset) %26) +90;
       let newChar = String.fromCharCode(newAscciPosition);
       mensaje = mensaje + newChar;
     }/*else {
       mensaje = mensaje+string[i];
     }*/
   }
   return mensaje;
 }
};
