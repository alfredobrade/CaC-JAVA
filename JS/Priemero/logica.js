console.log ("hola mundo");

var a=0
var i=0
//a++
a = ++i
console.log ("a = "+  a)
a = ++i
console.log ("a = "+  a)

// introduzco una decision logica
if (a == i){
    // aca aplicamos un cambio de tipo de variable de entero a String
    a = "igual"
} else {
    // en este lugar tambien se aplica el cambio de tiupo de variable
    a = "distinto"
}
//imprimimos el 
console.log ("a = "+  a)

var edad = 25

console.log ('tienes '+edad+' entonces ')
// prueba de else if
if (edad <= 33){
    console.log ("todavia eres milenial")

} else if (edad >= 80){
    console.log ("eres anciano")
} else {
    console.log ('ya no eres milenial')
}

// operador ternario
// condicion ? expTrue : expFalse
/*
sitch ( expresion ){
    case 1:     
        bloque 1
        break
    case 2:
        bloque2
        break
    default
        bloque default
}

*/

for (i = 0 ; i < 10 ; i++){
    console.log(i)
}

console.log(new Date().getDay()) // retorna el numero de dia de la semana empezando en domingo 0
console.log(new Date().getDate()) // esta te devuelve el dia fecha
console.log(new Date().getMonth()) // devuelve mes
console.log(new Date().getFullYear()) // devuelve el año completo


alert("*----termino el programa!!!!----*")