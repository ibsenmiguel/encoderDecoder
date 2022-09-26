
//Resgata o input, pausa o evento, faz a criptografia e retorna um resultado
const btncod = document.querySelector("#btnCod");
btncod.addEventListener("click", function() {

    //resgata o texto e extrai o conteudo
    let text = document.querySelector("#textBox");
    text = text.value

    //armazena os caracteres para codificar
    let changeWordCod = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

    //'textNew' irá armazenar o texto codifica que usa o metodo replace juntamente com uma regexp e uma função
    //função que por sua vez guarda o resultado da regexp em seu parametro 
    //no bloco da função, retorna-se a array 'changeWordCod' que tem como valor o parâmetro da função
    let textNew = text.replace(/a|e|i|o|u/g, function (ocorrencia) {

        return changeWordCod[ocorrencia];

    });


    document.getElementById("resultBox").innerText = textNew;

    //limpa a caixa de texto
    document.getElementById("textBox").value = '';
});

//Resgata o input, pausa o evento, faz a criptografia e retorna um resultado
const btndec = document.querySelector("#btnDec");
btndec.addEventListener("click", function() {

    //resgata o texto e extrai o conteudo
    let text = document.querySelector("#textBox");
    text = text.value

    //armazena os caracteres para codificar
    let changeWordDec = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

    //'textNew' irá armazenar o texto codifica que usa o metodo replace juntamente com uma regexp e uma função
    //função que por sua vez guarda o resultado da regexp em seu parametro 
    //no bloco da função, retorna-se a array 'changeWordCod' que tem como valor o parâmetro da função
    let textNew = text.replace(/ai|enter|imes|ober|ufat/g, function (ocorrencia) {

        return changeWordDec[ocorrencia];

    });


    document.getElementById("resultBox").innerText = textNew;

    //limpa a caixa de texto
    document.getElementById("textBox").value = '';

});


const btncopy = document.querySelector("#btnCopy");
btncopy.addEventListener("click", function() {

    let textRecorded = document.getElementById("resultBox").textContent;
    navigator.clipboard.writeText(textRecorded);
    console.log(textRecorded)
});

console.log();