// Prática 3 - Explorando eventos
// Neste template, temos um input para o usuário digitar um texto, e um parágrafo em branco. Utilizando eventos, verifique se o usuário está segurando Shift enquanto digita. Caso esteja, altere o valor do parágrafo para:
// ATENÇÃO: SEGURANDO SHIFT. Caso não esteja, o parágrafo volta a estar vazio

console.log("salve!");


// 1. FAZER UMA FUNÇÃO REUTILIZAR O CÓDIGO COMO MANIPULAÇÃO DO EVENTO
const verificarTecla = (event) => {
    
    // 2. EVENTO PEGA A INTERAÇÃO DO USUÁRIO, shiftkey PARA VER SE USOU O SHIFT
    if (event.shiftKey) {
        // 3. PEGA O ELEMENTO DE ID IGUAL A "mensagem", E IMPRIME NA TELA (innerHTML) A MENSAGEM DESEJADA
        document.getElementById("mensagem").innerHTML = "ATENÇÃO: SEGURANDO SHIFT"

    // 4. CASO A TECLA SHIFT NÃO SEJA APERTADA DURANTE A DIGITAÇÃO, NÃO APARECE NADA 
    } else {
        document.getElementById("mensagem").innerHTML = " "
    }
}