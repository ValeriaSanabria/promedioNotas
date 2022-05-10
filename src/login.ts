let claveCorrecta:string = "eureka";
let pass:string = "";

for (let i=1; i<=3; i++){
  pass = prompt("Ingrese la clave, intento nº"+i);
  if (pass == claveCorrecta) {
    console.log("Clave correcta");
    break;
  } else {
    console.log("error: clave incorrecta")
  }
}