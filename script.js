/*

ASYNC / AWAIT

*/

function convertToJson(response) {
    return response.json()

}

function displayOnScreen(dados) {
    console.log(dados)
}

function displayError() {
    console.log("Ops, deu erro.")
}

const loadButton = document.querySelector("#loadButton")
const container = document.querySelector(".container")


loadButton.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(convertToJson)
        .catch(displayError)

        console.log(dados)
    }