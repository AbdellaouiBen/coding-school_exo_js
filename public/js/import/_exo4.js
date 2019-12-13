// exo4

export function exo4() {
    
    let divCarreL = document.getElementsByClassName('divCarreL')[0]
    let divCarreR = document.getElementsByClassName('divCarreR')[0]
    let btnChange = document.getElementById('changePlace')
    let btnCompteur = document.querySelector('.btnCompteur span')
    let compteurExo4 =0

    btnChange.addEventListener('click',()=>{
        compteurExo4++
        if(compteurExo4%2==1){
            divCarreL.classList.replace("d-block","d-none")
            divCarreR.classList.replace("d-none","d-block")
        }else{
            divCarreL.classList.replace("d-none","d-block")
            divCarreR.classList.replace("d-block","d-none")
        }
        btnCompteur.innerText = compteurExo4
    })
    } 