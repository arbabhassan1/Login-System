let username=document.getElementById("username");
let password=document.getElementById("password");
let alert_box=document.getElementById("alert");
console.log("HELLO")
function Login(){
    if(username.value=="admin" && password.value=="184"){
        window.alert("Successfuly Login");
        //  window.location.href='dashboard.html';
        // window.open("dashboard.html");
    }else{

            window.alert("TRY Again!!");
           
            
        }
}
