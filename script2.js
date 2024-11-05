function validate() {
    const user = document.getElementById("txtuser").value;
    const pwd = document.getElementById("txtpwd").value;
    const age = document.getElementById("txtage").value
    const msgbox = document.getElementById("msg");
    let message = "";
    if (user == "") {
        message = "Please Enter Name";
        msgbox.style.color = "red";
    }
    else if (pwd == "") {
        message = "Please Enter Password";
        msgbox.style.color = "red";
    }
    else if (age == "") {
        message = "Please Enter Age";
        msgbox.style.color = "red";
    }
    else {
        message = "Submitted successfully";
        msgbox.style.color = "green";
    }
    msgbox.innerText = message;
}
