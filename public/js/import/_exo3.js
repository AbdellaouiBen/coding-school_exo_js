
    // exo3

export function exo3() {

    let titreNom = document.querySelector("#boxExoTrois span")
    let inputExo2 = document.querySelector("#boxExoTrois input")
    let btnExo2 = document.querySelector("#boxExoTrois button")

    btnExo2.addEventListener('click',()=>{
        titreNom.innerText = inputExo2.value
        inputExo2.value = ""
    })

    
}