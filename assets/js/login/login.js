function logar() {
    const email = document.getElementById("email");
    const password = document.getElementById("password")

    if (email.value == "adm@hotmail.com" && password.value == "123") {
        localStorage.setItem("acesso", true);
        window.location.href = `./adm/adm.html`
    } else {
        alert(
            "Erro ao fazer login, por favor tente email: adm@hotmail.com  password: 123")
    }
}


document.getElementById("myButton").addEventListener("click", logar);