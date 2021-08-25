var attempts = 3;

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

function getNameAndPass (username, key) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == username && users[i].password == key) {
            return true;
        }
    } return false
}

function signIn() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (name.length == 0 || pass.length == 0) {
        alert("No se ha introducido username o password.\nPor favor, intente nuevamente.");
    } else {
        if (getNameAndPass(name, pass)) {
            alert("Has ingresado correctamente!");
            accessIn = true;
        } else {
            alert("Nombre o contraseña incorrectos!\nPor favor, intente nuevamente.");
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