let texto = "Ontem eu dormi muito mal";

let textoMinusculo = texto.toLowerCase();

let separar = textoMinusculo.split("");

let vogais = separar.filter((separar) => ["a", "e", "i", "o", "u"].includes(separar));

let ordem = vogais.sort();

console.log(`Texto: ${textoMinusculo}.`);

console.log(`Quais vogais tem: ${ordem.join(", ")}.`);

console.log(`Número de vogais: ${vogais.length}.`);