const ERROR_NON_VALUES = `No se ha introducido username o password.`;
const SIGN_IN_MESSAGE = `Has ingresado correctamente!`;
const ERROR_SIGN_IN_MESSAGE = "Nombre o contraseña incorrectos!";

const users = [
    {   
        name: "Juan",
        password: "1234"
    },
    {
        name: "Diego123",
        password: '1234'
    },
    {
        name: "Sabri123",
        password: '1234'
    }
]

var attempts = 3;

function getNameAndPass (username, key) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == username && users[i].password == key) {
            return true;
        }
    } return false
}

function innerText (id, text, color, size) {
    document.getElementById(id).innerHTML = text;
    document.getElementById(id).style.color = color;
    document.getElementById(id).style.fontSize = size;
}

function signIn() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (name.length == 0 || pass.length == 0) {
        innerText('error-message', ERROR_NON_VALUES, 'red', '14px')
    } else {
        if (getNameAndPass(name, pass)) {
            innerText('error-message', SIGN_IN_MESSAGE, 'green', '16px');
        } else {
            innerText('error-message', ERROR_SIGN_IN_MESSAGE, 'red', '16px');
            attempts --;
        }
    }

    if (attempts == 0) {
        alert("Has intentado muchas veces. Intente nuevamente más tarde.");
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
    }
}