const passField=document.querySelector(".password");
const icon=document.querySelector(".icon i");
document.querySelector(".icon").addEventListener("click",()=>{

    if(passField.type==="password"){
        passField.type="text";
        icon.classList.remove("fa-regular", "fa-eye");
        icon.classList.add("fa-regular", "fa-eye-slash");
        }
        else{
            passField.type="password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
})
