//   initialiser forms
const InitialForms = ()=>{

    document.querySelector(".open_btn").addEventListener("click",()=>{
        document.querySelector("#validValueId").value='';
        document.querySelector("#validValueNom").value='';
        document.querySelector("#validValuePrenom").value='';  
        document.querySelector("#validValueDate").value='';
        document.querySelector("#validValueEmail").value='';
        document.querySelector("#validValuePassword").value='';
        document.querySelector("#validValueS").value='';
        document.querySelector("#validValueSex").value='';
    
        document.querySelector(".addUsers").innerText="ajouter";
    
        
    })
}
export default InitialForms;