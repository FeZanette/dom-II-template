// Prática 2 - Alterando elementos
// Neste template, temos um formulário de login. Ao lado do campo de senha, há um botão para esconder a senha.
// Implemente no onclick deste botão uma função para alterar o type do input para password.


// 1. CRIAR UMA FUNÇÃO P/ REUTILIZAR A LÓGICA DO CÓDIGO POIS ESTAMOS FAZENDO UMA AÇÃO (FUNÇÃO = AÇÃO)
const mudarInputPassword = (event) => {
    // 2. ANULAR O COMPORTAMENTO PADRÃO DA TAG
    event.preventDefault()
    // 3. IDENTIFICAR E PEGAR O ELEMENTO CUJO ID É "password"(ELEMENTO QUE QUEREMOS FAZER A ALTERAÇÃO)
    const meuInputDeSenha = document.getElementById("password")
    // 4. ALTERAR O ATRIBUTO DESSE ELEMENTO (STATUS ATUAL PARA O QUE QUER ALTERAR)
    meuInputDeSenha.setAttribute("type","password")
    }

// HTML -> ACRESCENTAR A FUNÇÃO onclick="mudarInputPassword(event)" TANTO NO BOTÃO QUANTO NO INPUT

// ---------------------------------

// Além disso, altere a classe CSS do elemento form na página, removendo a classe "light" e adicionando a classe "dark".

function alterarModoDeEstilo(event){
    event.preventDefault()
    const form = document.querySelector(".light")
    //form.classList.remove("light")
    //form.classList.add("dark")
    form.classList.toggle("dark")

    
// AO INVÉS DE INSERIR A FUNÇÃO EM UM NOVO BOTÃO, EU INSERI A FUNÇÃO NA TAG FORM