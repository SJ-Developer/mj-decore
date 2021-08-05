function show()
{
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var textarea = document.getElementById("textarea").value;
//   console.log("Name: "+name+"\nPhone no.: "+phone+"\nEmail-Id: "+email+"\nPassword: "+password+"\nSuggestions: "+textarea);
  var visitor = { Name:name, Phone:phone, Email:email, Password:password, Suggestions:textarea };
  // console.log(visitor);
  confirm("Name: " + name + " Phone: " + phone + " Email-ID: " + email + " Password: " + password + " Suggestions: " + textarea);
}

function reset(){  
  // confirm("Reset?");
  document.getElementById("name").value = "";  
  document.getElementById("phone").value = "";  
  document.getElementById("email").value = "";  
  document.getElementById("password").value = "";  
  document.getElementById("textarea").value = "";  
} 

