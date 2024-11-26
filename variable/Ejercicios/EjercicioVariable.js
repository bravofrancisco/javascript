/**
 * Ambito Global
 */
console.log("**ambito global*");

let x = 10;
function Ejemplo() {
  let y = 20; //ambito local
  if (true) {
    let z = 30; //Ambito de bloque;
  }
  console.log(z);
}
