// Prática 1 - Criando elementos
// No template HTML do exercício, temos uma lista de elementos. Utilizando a manipulação do DOM, acrescente um item ao começo da lista e outro ao final. O texto dos elementos deve ser "Item 0" e "Item 5", respectivamente.


console.log("bananinha");

function addItem(){
    // INSERINDO "ITEM 0"
    // 1. CRIAR O ELEMENTO QUE SE DESEJA ACRESCENTAR
    const newLi0 = document.createElement("li")
    // 2. CRIAR O CONTEÚDO A SER ACRESCENTADO
    const newContent0 = document.createTextNode("Item 0")
    // 3. ADICIONAR O CONTEÚDO AO ELEMENTO
    newLi0.appendChild(newContent0)
    // 4. INDICAR ONDE COLOCAR O NOVO ELEMENTO
    const currentUl = document.getElementById("lista")
    // 5. INDICAR A POSIÇÃO E O NOVO ELEMENTO 
    currentUl.insertAdjacentElement("afterbegin",newLi0)

    // INSERINDO O "ITEM 5"
    const newLi5 = document.createElement("li")
    const newContent5 = document.createTextNode("Item 5")
    newLi5.appendChild(newContent5)
    currentUl.insertAdjacentElement("beforeend", newLi5)

}

addItem()