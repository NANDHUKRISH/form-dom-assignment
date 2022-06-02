

var submit=document.querySelector("#submit");
submit.addEventListener("click", function(){

    displaydetails();
    
});



function displaydetails()
{var tablerow=1;

    var fname =document.querySelector("#firstname").value;
    var lname =document.querySelector("#lastname").value;
    var pincode =document.querySelector("#pincode").value;
    var address =document.querySelector("#address").value;
    var gender =document.querySelector("#gender").value;
    var food =document.querySelector("#FOOD").value;
    var state =document.querySelector("#state").value;
    var country =document.querySelector("#country").value;

 if(!fname || !lname || !pincode || !address || !gender || !food || !state || !country)
 {  
     alert("MANDATORY TO FILL ALL THE BOXES");
     return;
 }

var tablebody = document.querySelector("#table-body");

var tablerow =`<tr>
 <td>${fname}</td>
 <td>${lname}</td>
 <td>${pincode}</td>
 <td>${address}</td>
 <td>${gender}</td>
 <td>${food}</td>
 <td>${state}</td>
 <td>${country}</td>
</tr>`

tablebody.innerHTML=tablerow;
tablerow++;
}