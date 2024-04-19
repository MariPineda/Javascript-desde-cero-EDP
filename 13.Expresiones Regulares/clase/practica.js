const regexNombre = /^[a-zA-ZÀ-ÿ\s]{4,20}$/
const regexDni = /^[0-9][^\.a-zA-Z]{6,7}$/
const regexEmail = /^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(.com | .net | gov.ar)$/
const regexPasswordFacil = /^.{8,24}$/
const regexPasswordDificil = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/

let frase = "   Leonardo  "
let frasedos = "40995919"
let contrasenadificil = "Amig@899mia"

console.log(regexNombre.test(frase))
console.log(regexDni.test(frasedos))
console.log(regexDni.test(contrasenadificil))

console.log(frase)
console.log(frase.trim())
console.log(frasedos)
console.log(contrasenadificil)