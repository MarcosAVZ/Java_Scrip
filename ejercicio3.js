var fact = 1
var aux = 1
console.log("Factorial utilizando el For")
console.log("")
for (let i = 0; i < 10; i++) {
    fact = fact * aux
    aux = aux + 1
    console.log(fact)
}
console.log("")
console.log("")
console.log("")
console.log("Factorial utilizando el while")

fact = 1
aux = 1

while(aux !== 11){
    fact = fact * aux
    aux = aux + 1
    console.log(fact)
}


console.log("")
console.log("")
console.log("")
console.log("Factorial utilizando el break")


fact = 1
aux = 1

while(aux !== 100){
    fact = fact * aux
    aux = aux + 1
    console.log(fact)
    if(aux == 10){
        console.log(fact)
        break
    }
}