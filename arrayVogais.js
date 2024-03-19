let texto = "Thiago";

let textoMinusculo = texto.toLowerCase();

let separar = texto.split("");

console.log(separar);

let vogais = separar.filter((separar) => ["a", "e", "i", "o", "u"].includes(separar));

let ordem = vogais.sort();

console.log(`Texto: ${textoMinusculo}.`)

console.log(`Quais vogais tem: ${ordem.join(", ")}.`);

console.log(`Número de vogais: ${vogais.length}.`);