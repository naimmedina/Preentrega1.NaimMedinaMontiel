let nombre = prompt('Ingrese su nombre');

function obtenerSignoZodiacal(dia, mes) {
    const signos = [
        { nombre: "Capricornio", inicio: { dia: 22, mes: 12 }, fin: { dia: 19, mes: 1 } },
        { nombre: "Acuario", inicio: { dia: 20, mes: 1 }, fin: { dia: 18, mes: 2 } },
        { nombre: "Piscis", inicio: { dia: 19, mes: 2 }, fin: { dia: 20, mes: 3 } },
        { nombre: "Aries", inicio: { dia: 21, mes: 3 }, fin: { dia: 19, mes: 4 } },
        { nombre: "Tauro", inicio: { dia: 20, mes: 4 }, fin: { dia: 20, mes: 5 } },
        { nombre: "Géminis", inicio: { dia: 21, mes: 5 }, fin: { dia: 20, mes: 6 } },
        { nombre: "Cáncer", inicio: { dia: 21, mes: 6 }, fin: { dia: 22, mes: 7 } },
        { nombre: "Leo", inicio: { dia: 23, mes: 7 }, fin: { dia: 22, mes: 8 } },
        { nombre: "Virgo", inicio: { dia: 23, mes: 8 }, fin: { dia: 22, mes: 9 } },
        { nombre: "Libra", inicio: { dia: 23, mes: 9 }, fin: { dia: 22, mes: 10 } },
        { nombre: "Escorpio", inicio: { dia: 23, mes: 10 }, fin: { dia: 21, mes: 11 } },
        { nombre: "Sagitario", inicio: { dia: 22, mes: 11 }, fin: { dia: 21, mes: 12 } }
    ];

    for (let i = 0; i < signos.length; i++) {
        const signo = signos[i];
        if (
            (mes === signo.inicio.mes && dia >= signo.inicio.dia) ||
            (mes === signo.fin.mes && dia <= signo.fin.dia)
        ) {
            return "Tu signo es " + signo.nombre + " " + nombre;
        }
    }

    return "Fecha inválida";
}

let diaNacimiento = parseInt(prompt('Ingrese su día de nacimiento (solamente el numero)'));
let mesNacimiento = parseInt(prompt('Ingrese su mes de nacimiento (solamente el numero)'));
console.log(obtenerSignoZodiacal(diaNacimiento, mesNacimiento));
