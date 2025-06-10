//1️⃣Crie um programa que faça **três perguntas ao usuário**.
//✅ Utilize **`prompt()`** para obter as respostas.
//✅ Armazene cada resposta em uma variável diferente.

const pergunta01 = prompt('Qual curso vc faz? ');
const pergunta02 = prompt('Em qual período está? ');
const pergunta03 = prompt('Qual instituição? ');


//2️⃣  Agora, utilize console.log() para imprimir todas as respostas.

console.log(pergunta01, pergunta02, pergunta03);


// 3️⃣Agora, altere seu código para armazenar as perguntas em variáveis separadas.

const pergunta01 = "Qual curso vc faz?";
const pergunta02 = "Em qual período está?";
const pergunta03 = "Qual instituição?";


const resposta_usuario1= prompt(pergunta01);
const resposta_usuario2= prompt(pergunta02);
const resposta_usuario3= prompt(pergunta03);

// 4️⃣ Modifique a exibição no console para imprimir tanto a pergunta quanto a resposta


console.log(`${pergunta01} - ${resposta_usuario1}`);
console.log(`${pergunta02} - ${resposta_usuario2}`);
console.log(`${pergunta03} - ${resposta_usuario3}`);
