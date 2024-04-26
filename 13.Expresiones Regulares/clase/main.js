
const regex = {
    nombre : /^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    dni : /^[0-9][^\.a-zA-Z]{6,7}$/,
    email : /^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/,
    password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,24}$/
}


const inputs = document.querySelectorAll('#registro input')
inputs.forEach(input=> {
    input.addEventListener('blur', () => validacion(input.name, input.value ))
    input.addEventListener('keydown', () => validacion(input.name, input.value))
})

//const $ = selector => document.querySelector(selector)

//const $nombre = $('#nombre')
//const $dni = $('#dni')
//const $email = $('#email')
//const $password = $('#password')
//const $btnEnviar = $('#enviar')

const valueRegex = {
    nombre:false,
    dni:false,
    email:false,
    password:false,
}

function validacion(name, value) {
    if (regex[name].test(value)) valueregex[name] = true
}
//otra opción:
//const $nombre = $('#nombre')
//const $dni = $('#dni')
//const $email = $('#email')
//const $password = $('#password')
//const $btnEnviar = $('#btnEnviar')

$btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    const value = $nombre.value
    if(regexNombre.test(value)){
        console.log("Cumpliste con el regex");
    }else{
        console.log("no cumpliste");
    }
})
//otra forma:
//$btnEnviar.addEventListener('click', (event) => {
//    event.preventDefault();

//    regexNombre.test($nombre.value) ? valueRegex.nombre = true : valueRegex.nombre = false
//    regexDni.test($dni.value) ? valueRegex.dni = true : valueRegex.dni = false
//    regexEmail.test($email.value) ? valueRegex.email = true : valueRegex.email = false
//    regexPassword.test($password.value) ? valueRegex.password = true : valueRegex.password = false

document.querySelectorAll('#enviar').addEventListener('click', (event) => {
    event.preventDefault();
    let contador = 0;
    for (const key in valueRegex) {
        if(valueRegex[key] === true){
            contador++
        }
    }
    const $ = selector => document.querySelector(selector)
    if (contador === 4){
        const db = JSON.parse(localStorage.getItem('BaseDeDatos'))
        const user = {
            nombre: $('#nombre').value,
            dni: $('#dni').value,
            email: $('#email').value,
            password: $('#password').value,
        }
    }
    db.push(user)
    localStorage.setItem('BaseDeDatos', JSON.stringify(db))
})
    console.log(contador)
    contador === 4 ? console.log("ingresaste") : console.log("no ingresaste")


//    if(valueRegex.nombre && valueRegex.dni && valueRegex.email && valueRegex.password){
//        console.log("pasaste");

//    }else{
//        console.log("no pasaste");
//    }
//    console.log(valueRegex);
//})

// LocalStorage

let LocalStorage = {
    key: value,
    key2: value
}

//Login

const $loginNombre = $('#login-nombre')
const $loginPass = $('#login-password')

$('#login').addEventListener('click', (e) => {
    e.preventDefault()

    const db = JSON.parse(localStorage.getItem('BaseDeDatos'))

    const user = db.fond((user) => user.nombre === $loginNombre.value)

    if(exite.nombre === $loginNombre.value && existe.password === $loginPass.value){
    console.log("Ingresaste");
    $('#div').classList.remove('oculto')
    $('.registro').classList.add('oculto')
    $('#ingreso').classList.add('oculto')
    }else {
    console.log("Algo está mal")
    }
})