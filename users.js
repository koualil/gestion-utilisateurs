
import InitialForms from './initialForms.js';
// //   initialiser forms
InitialForms();
$(document).ready(function () {
    
    // fetch all data
    var dataTable = $('#table_id').DataTable({
        
        ajax: 'http://localhost/gestion%20utilisateurs/php/AllUsers.php',
        columns: [
            
            { data: 'nom' },
            { data: 'prenom' },
            { data: 'dateNaissance' },
            { data: 'email' },
            { data: 'password' },
            { data: 'situationFamiliale' },
            { data: 'sex' },
            { data:'idUsers',
            render: function(data){
                return `<button class="updateUsers button-29" data-id=${data}>modifier</button>`
            } },
            { data:'idUsers',
            render: function(data){
                return `<button class="deleteUsers button-29 ferme" data-id=${data}>supprimer</button>`
            } },
            
            
        ],
        
        
    });
    
    //   add user
    $('.addUsers').click(function (e) { 
        
        e.preventDefault(); 
        
        if(!document.querySelector("#validValueId").value){
            
        let myform = document.getElementById("myform");
        let frm = new FormData(myform); 
           if($('#validValueNom').val() !='' && 
           $('#validValuePrenom').val()!='' && 
           $('#validValueDate').val()!=''&& 
           $('#validValueEmail').val()!=''&& 
           $('#validValuePassword').val()!='' && 
           $('#validValueS').val()!='' && 
           $('#validValueSex').val()!='' 
           ){
        
        $.ajax({
            url: 'http://localhost/gestion%20utilisateurs/php/addUser.php',
            data: frm,
            type: 'POST',
            processData: false,
            contentType: false,
            success:function(data){ 
                var json = JSON.parse(data);
                if(json.status === true){
                dataTable.ajax.reload();
                document.querySelector(".modale-container").style.display='none';
                }
            }
        })
    }
        else alert("remplir tous les champs!");
    }
         
});
    
// supprimer user
$(document).on('click', '.deleteUsers', function(e) {
    document.querySelector(".modale-container").style.display='none'; 
        
        e.preventDefault();
        let id= e.target.getAttribute("data-id");
      
      $.ajax({
        url:`http://localhost/gestion%20utilisateurs/php/deleteUser.php?id=${id}`,
        
          type: "post",
        success:function(data){ 
                var json = JSON.parse(data);
                if(json.status === true){
                dataTable.ajax.reload();
                 
                }
            }
      })
    })
});
//  modifier edit
$(document).on('click', '.updateUsers', function(e) {
    
    let id= e.target.getAttribute("data-id");
    if(id){ console.log(id);
     document.querySelector(".addUsers").innerText="modifier";
     document.querySelector(".modale-container").style.display='block'; 
      
        $.ajax({
            url:`http://localhost/gestion%20utilisateurs/php/getUser.php?id=${id}`,
        }).then(data=>{   data=JSON.parse(data); 
            document.querySelector("#validValueId").value=data[0].idUsers;
            document.querySelector("#validValueNom").value=data[0].nom;
            document.querySelector("#validValuePrenom").value=data[0].prenom;
            document.querySelector("#validValueDate").value=data[0].dateNaissance;
            document.querySelector("#validValueEmail").value=data[0].email;
            document.querySelector("#validValuePassword").value=data[0].password;
            document.querySelector("#validValueS").value=data[0].situationFamiliale;
            document.querySelector("#validValueSex").value=data[0].sex;
    
        });
    }
    }); 
    
        //  modifier les info
     $(document).on('click', '.addUsers', function(e) {
     
         let id= document.querySelector("#validValueId").value;
         e.preventDefault();  
         if($('#validValueNom').val() !='' && 
         $('#validValuePrenom').val()!='' && 
         $('#validValueDate').val()!=''&& 
         $('#validValueEmail').val()!=''&& 
         $('#validValuePassword').val()!='' && 
         $('#validValueS').val()!='' && 
         $('#validValueSex').val()!='' 
         ){
         if(id){
         let myform = document.getElementById("myform"); 
         let frm = new FormData(myform);
         console.log(id);
         console.log("update");
                $.ajax({ 
                  url:`http://localhost/gestion%20utilisateurs/php/updateUser.php?id=${id}`,
                  data:frm,
                  type: "post",
                  processData: false,
                  contentType: false,
                  success:function(data){ 
                      var json = JSON.parse(data);  
                      var dataTable = $('#table_id').DataTable();
                      if(json.status === true){
                          dataTable.ajax.reload();
                          document.querySelector(".modale-container").style.display='none';
                          
                        }
                    }
            }); 
        } 
    }
    else alert("Remplir tous les champs !")
        }); 
                
 
             
 
        
     
 
 
