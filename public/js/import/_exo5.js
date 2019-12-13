 // exo5
export function exo5() {
   
    let btnExo5 = document.querySelector('#boxExoCinq button')
    let divAOeufs= document.querySelector('.divAOeufs')
    let imgExo5 = document.createElement("img")
    imgExo5.setAttribute('src',"../../images/images_oeuf.jpg")

    btnExo5.addEventListener('click',e=>{
        let imgExo5 = document.createElement("img")
        imgExo5.setAttribute('src',"public/images/image_oeuf.jpg")
        divAOeufs.appendChild(imgExo5)
    })
    
}