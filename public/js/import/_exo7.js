// exo7

export function exo7() {

    let inputExo7 = document.querySelector('.inputExo7')
    let btnToutes = document.querySelector('.btnToutes')
    let btnCompletes = document.querySelector('.btnCompletes')
    let btnAFaire = document.querySelector('.btnAFaire')
    let tabBtn = document.querySelectorAll('.btnExo7')
    let divListe = document.querySelector('.divExo7')

    let completes = document.querySelectorAll('.completes')
    let aFaire = document.querySelectorAll('.aFaire')

    let tableau = []

    let inputVenere =document.createElement('input')
    inputVenere.type = 'text' 


    // changement de couleurs des boutons toute/comppletes/a faire
    tabBtn.forEach(e => {
        e.addEventListener('click', a => {
            for (let i = 0; i < tabBtn.length; i++) {
                tabBtn[i].style.backgroundColor = ""
                tabBtn[i].style.color = "blue"
            }
            e.style.backgroundColor = "blue"
            e.style.color = "white"
        })
    })
    let truc
    // boutons toutes/completes/a faire  
    btnToutes.addEventListener('click', a => {
        truc = document.querySelectorAll(".divExo7 div")
        truc.forEach(e => {
            e.classList.replace("d-none", "d-flex")
        })
    })


    btnCompletes.addEventListener('click', a => {
        completes = document.querySelectorAll('.completes')
        completes.forEach(e => {
            e.classList.replace("d-none", "d-flex");
        })
        aFaire = document.querySelectorAll('.aFaire')
        aFaire.forEach(c => {
            c.classList.replace("d-flex", "d-none");
        })
    })


    btnAFaire.addEventListener('click', a => {
        aFaire = document.querySelectorAll('.aFaire')
        aFaire.forEach(e => {
            e.classList.replace("d-none", "d-flex");
        })
        completes = document.querySelectorAll('.completes')
        completes.forEach(a => {
            a.classList.replace("d-flex", "d-none");
        })
    })
    //press enter ajout a la liste


    inputExo7.addEventListener('keypress', e => {
        if (e.key == "Enter" && inputExo7.value != '') {

            let divLigne = document.createElement("div");
            divLigne.setAttribute('class', 'aFaire');

            divLigne.classList.add('d-flex')

            let checkbox = document.createElement("input");
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('class', 'checkBox');
            checkbox.setAttribute('checkbox', "");
            let ligne = document.createElement("p");
            let todo = document.createTextNode(inputExo7.value);
            ligne.appendChild(todo);
            let croixSpan = document.createElement("span");
            croixSpan.innerHTML = '<i class="fas fa-times cross"> </i>';


            divListe.appendChild(divLigne);
            divLigne.appendChild(checkbox);
            divLigne.appendChild(ligne);

            divLigne.appendChild(croixSpan);

            inputExo7.value = '';


            tableau.push(divLigne)
        }



        tableau.forEach(e => {
            e.children[0].addEventListener('click', () => {
                if (e.children[0].checked == true) {
                    e.setAttribute("class", 'bg-success')
                    e.classList.add('completes')
                    e.classList.add('d-flex')

                } else {
                    e.setAttribute("class", '')
                    e.classList.add('aFaire')
                    e.classList.add('d-flex')
                }
            })

            e.children[2].addEventListener('click',()=>{
                e.remove()
            })

            e.children[1].addEventListener('click',a=>{
                
                let inputVenere =document.createElement('input')
                inputVenere.type = 'text'                
                let temp =e.children[1].innerText
                inputVenere.value = temp ;

                e.replaceChild(inputVenere, e.children[1])    
                 
                  
                inputVenere.addEventListener('keypress',elem=>{ 
                    inputVenere.value = elem.target.value;
                    if(elem.key == "Enter" && inputVenere.value != ''){
                        let p = document.createElement('p')
                        p.innerHTML = inputVenere.value
                        e.replaceChild(p,inputVenere )  
                    }
                })
            })


        })
 







    })
    // croix

    // let croix = document.querySelectorAll(.cross)
    // croix.forEach(e=>{
    //     e.addEventListener('click',a=>{
    //         let temporr = e.parentNode
    //         temporr.parentNode 
    // })
}