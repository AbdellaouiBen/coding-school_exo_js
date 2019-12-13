// selection 
export function exo2() {
    
    let aSelector = document.querySelectorAll("#navig a")
    let divExo  = document.querySelectorAll(".divExo")

    let tab = []

    for (let i = 0; i < aSelector.length; i++) {
        tab.push({
            lien : aSelector[i],
            exo : divExo[i]
        });
        if(i!=3){
            divExo[i].style.display = 'none'
        }
    }


    tab.forEach(e=>{
        e.lien.addEventListener('click',()=>{
            tab.forEach(x=>{
                x.lien.classList.replace('text-white',"text-primary")
                x.lien.classList.replace('bg-primary',"bg-white")
                x.exo.style.display ='none'
            });
            e.lien.classList.replace('text-primary','text-white')
            e.lien.classList.replace('bg-white',"bg-primary")
            e.exo.style.display ='block'
        })
    })
    
}



// aSelector.forEach(e => {
    
//     e.addEventListener('click', y => {

//         aSelector.forEach(a => { 
//             a.classList.replace('text-white', 'text-primary');
//             a.classList.replace('bg-primary', 'bg-white');
//         });
//         divExo.forEach(b=>{
//             b.classList.replace('d-block' ,'d-none');
//         })
//         info = aSelector.indexOf(e)
//         divExo[info].classList.replace('d-none', 'd-block');
//         e.classList.replace('text-primary', 'text-white');
//         e.classList.replace('bg-white', 'bg-primary');
//     });
    
// });

// divExo.forEach(v=>{
//     aSelector.addEventListener('click',e=>{
//         let info = aSelector.indexOf(e)
//         divExo[info].classList.replace('d-none', 'd-block');
//     })  
// })