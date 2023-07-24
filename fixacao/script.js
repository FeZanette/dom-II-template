// Exercício de fixação
// Neste template, temos uma lista de itens e um formulário. Agora, ao clicar no botão "Clique para inserir", devemos adicionar o conteúdo do formulário ao final da nossa lista de itens.

function addItem () {
    const newElement = document.createElement("li")
    const textInput = document.getElementById("meu-input").value
    const newContent = document.createTextNode(textInput)
    newElement.appendChild(newContent)
    const currentUl = document.getElementById("lista")
    currentUl.insertAdjacentElement("beforeend", newElement)
}


// ---------------------------------------


// OUTRA FORMA DE RESOLVER:

// function addItem () {
//     let item = document.querySelector('#meu-input')

//     const newElement = document.createElement("li")
//     if (item.value !== "") {
//         newElement.innerHTML = item.value;
//         lista.insertAdjacentElement("beforeend", newElement)
//     } else {
//         alert("input vazio")
//     }
//     item.value = ""
// }
