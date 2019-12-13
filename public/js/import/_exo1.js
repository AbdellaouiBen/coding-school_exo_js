// exo 1
export function exo1(){


    let btnExo1 = document.getElementsByTagName("button")[0]
    let titreExo1 = document.getElementById('titreChange')
    btnExo1.addEventListener('click',e=>{
        titreExo1.style.backgroundColor='blue';
        titreExo1.style.color='red';
        titreExo1.innerText = 'Le titre modifié'
        btnExo1.style.display ='none'       
    })

    
}