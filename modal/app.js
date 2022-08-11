const btn = document.querySelector(".open_btn");
const modale = document.querySelector(".modale-container");
const ferme = document.querySelector(".ferme");
 

btn.addEventListener("click",()=>{
 modale.style.display="block" ;
})
ferme.addEventListener("click",()=>{
    modale.style.display="none" ;

})
window.addEventListener("click",(e)=>{
    if(e.target === modale ){
        modale.style.display="none" ;

    }
})