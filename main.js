// let persona = {
//     nombre: 'Jaime',
//     apellido: 'Zapata',
//     edad: 31,
//     dirrecion: {
//         ciudad: 'Medellin',
//         barrio: 'Belen',
//         coordenadas: {
//             latitud: '12,13',
//             altitud: ''

//         }
//     }
// }

// console.log(persona)
// console.log(persona.apellido)
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.dirrecion.barrio)
// console.log(persona.dirrecion.coordenadas.latitud)

//console.log(persona);

let personas = [];
for (let index = 0; index < 2; index++) {
let nombre = prompt('ingrese su nombre: ')
let apellido = prompt('ingrese su apellido: ')
let edad = prompt('ingrese su edad: ')
let ciudad = prompt('ingrese su cuidad: ')
let barrio = prompt('ingrese su barrio: ')
let persona = {
    nombre,
    apellido,
    edad,
    dirrecion: {
        ciudad,
        barrio
    },
    };
    console.unshift(persona);
}


for (let index =0; index < personas.length; index++){
    console.log(personas[index])
}


persona.forEach((persona)=>{
    console.log(persona)
})

personas.map((persona) =>{
    console.log(persona)
})

// for (const persona of personas) {
//     console.log(persona)
// }

let NuevasPersonasDos=personas.forEach((persona)=>{
    console.log(persona)
})

let Nuevaspersonas=personas.map((persona)=>{
    console.log(persona)
})
