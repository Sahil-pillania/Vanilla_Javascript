function validation(){

    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text.innerHTML = "Your email address is Valid";
        text.style.color = "#0f0";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text.innerHTML = "Enter a valid email address";
        text.style.color = "#f00";

    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("Invalid");
        text.innerHTML = "";
        text.style.color = "#00f";
    }
}