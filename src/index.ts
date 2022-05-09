let nota, suma, promedio, contador: number
//contador = 1;
suma = 0;

/*while(contador<=10) {
  nota = Number(prompt("Ingrese una nota:"));
  suma = suma + nota;
  contador = contador + 1;
}
promedio = suma / 10
console.log("El promedio de las notas es:" + promedio);*/

/*for(num = inicial; <condicion>; incremento) {
  <instruccion>
} */

//contador++ es el incremento

for(contador = 1; contador <= 10; contador++ ) {
  nota = Number(prompt("Ingrese una nota:"));
  //suma = suma + nota lo convierto a suma += nota
  suma += nota;
}
promedio = suma / 10
console.log("El promedio de las notas es:" + promedio);
  
