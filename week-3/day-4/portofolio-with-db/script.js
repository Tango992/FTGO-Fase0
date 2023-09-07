var formMenu = document.getElementById("input-form");
formMenu.style.visiblity = "hidden";
formMenu.style.opacity = "0";

function editForm(){
    if (formMenu.style.opacity === "0") {
        formMenu.style.visibility = "visible";
        formMenu.style.opacity = "1";
        formMenu.style.transition = "0.25s ease-out";
    } else {
        formMenu.style.visibility = "hidden";
        formMenu.style.opacity = "0";
    };
}

var name = document.getElementById("pName").innerHTML;
document.getElementById("inpName").value = name;

var role = document.getElementById("pRole").innerHTML;
document.getElementById("inpRole").value = role;

var available = document.getElementById("pAvailable").innerHTML;
document.getElementById("inpAvailable").value = available;

var age = document.getElementById("pAge").innerHTML;
document.getElementById("inpAge").value = age;

var experience = document.getElementById("pExperience").innerHTML;
document.getElementById("inpYears").value = experience;

var loc = document.getElementById("pLocation").innerHTML;
document.getElementById("inpLocation").value = loc;

var email = document.getElementById("pEmail").innerHTML;
document.getElementById("inpEmail").value = email;

var btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", () => {
    document.getElementById("pName").innerHTML = document.getElementById("inpName").value;
    document.getElementById("pRole").innerHTML = document.getElementById("inpRole").value;
    document.getElementById("pAvailable").innerHTML = document.getElementById("inpAvailable").value;
    document.getElementById("pAge").innerHTML = document.getElementById("inpAge").value;
    document.getElementById("pExperience").innerHTML = document.getElementById("inpYears").value;
    document.getElementById("pLocation").innerHTML = document.getElementById("inpLocation").value;
    document.getElementById("pEmail").innerHTML = document.getElementById("inpEmail").value;
})