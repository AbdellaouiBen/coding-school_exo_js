// exo 6
export function exo6() {
///////////////////// NIVEAU 1
    let input1Nv1 = document.querySelector('.input1Nv1') 
    let input2Nv1 = document.querySelector('.input2Nv1') 
    let btnNv1 = document.querySelector('.btnNv1') 
    let repNv1 = document.querySelector('.repNv1') 

    btnNv1.addEventListener('click',e=>{
        repNv1.innerText=Number(input1Nv1.value) + Number(input2Nv1.value) 
    })

    ///////////////////////   NIVEAU 2
    let numbers = document.querySelectorAll('.number') 

    let plus = document.querySelector(".btnPlus")   
    let moins = document.querySelector(".btnMoins")
    let multi = document.querySelector(".btnMulti")  
    let divise = document.querySelector(".btnDivise")

    let btnClear =document.querySelector(".btnClear") 

    let btnEgal =document.querySelector(".btnEgal") 
    
    let input = document.querySelector(".inputNv2") 

    let repNv2 = document.querySelector(".repNv2") 



    let varCalc1 
    let varCalc2
    let temporaire 
    // boutton numbers
    numbers.forEach(e =>{
        e.addEventListener('click',e=>{
            input.value+=Number(e.target.innerText) 
        })
    })
    // boutons operateurs
    plus.addEventListener('click',e=>{
        varCalc1=input.value 
        input.value+= e.target.innerText
        temporaire= "plus"
    })  
    moins.addEventListener('click',e=>{
        varCalc1=input.value 
        input.value+= e.target.innerText 
        temporaire= "moins"
    })
    multi.addEventListener('click',e=>{
        varCalc1=input.value 
        input.value+= e.target.innerText
        temporaire= "multi"
    })
    divise.addEventListener('click',e=>{
        varCalc1=input.value 
        input.value+= e.target.innerText 
        temporaire= "divise"
    })

    // bouton egal
    btnEgal.addEventListener('click',e=>{
        varCalc2=input.value.substr(varCalc1.length+1)
        let rep
        switch(temporaire){
            case "plus":
                rep= Number(varCalc1)  + Number(varCalc2) ;
                repNv2.innerText=  input.value +' = '+ rep
                break;
            case "moins":
                rep= Number(varCalc1)  - Number(varCalc2) ;
                repNv2.innerText= input.value +' = '+ rep  
                break;
            case "multi":
                rep= Number(varCalc1)  * Number(varCalc2) ;
                repNv2.innerText= input.value +' = '+ rep
                break;
            case "divise":
                rep= Number(varCalc1)  / Number(varCalc2) ;
                repNv2.innerText= input.value +' = '+ rep
                break;
        }
        input.value=' '
        })

    // boutton clear 
    btnClear.addEventListener('click',e=>{
        input.value =""
        repNv2.innerText = "?"      
    })

}
