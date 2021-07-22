'use strict'
//https://github.com/Alejita0985/clase20072021switch_objetos.git
//La EPS largas filas ha decido desarrollar un módulo de reportes con la siguiente informacion inicial:
//nombreEPS = Largas Filas
//nit = 890.001.001
//afiliados={totalHombres=5600000,totalMujeres=7000000},afiliadosVacunados=215000
let EPS = {
    'nombreEPS': 'Largas Filas',
    'nit': '890.001.001',
    'afiliados': {
        'totalHombres': 5600000,
        'totalMujeres': 7000000
    },
    'afiliadosVacunados': 211500
}
//Elaborar una funcion que imprima el numero total de afiliados y  que porcentaje corresponde a hombres y  mujeres

function obtenerPorcentajes() {
    if (EPS != undefined) {
        let totalAfiliados = EPS.afiliados.totalMujeres + EPS.afiliados.totalHombres;
        let porcentajeMujeres = Math.round((EPS.afiliados.totalMujeres * 100) / totalAfiliados);
        let porcentajeHombres = Math.round((EPS.afiliados.totalHombres * 100) / totalAfiliados);
        console.log(`----------------------------------------------------------------------------------------`);
        console.log(`Total Afiliados ${totalAfiliados}`);
        console.log(`Porcentaje mujeres ${porcentajeMujeres}% --> Porcentaje hombres ${porcentajeHombres}%`);
        console.log(`----------------------------------------------------------------------------------------`);

    }
}


obtenerPorcentajes();

//Determine el porcentaje total de afiliados vacunados
function obtenerPorcentajeVacunados() {
    if (EPS != undefined) {
        let totalAfiliados = EPS.afiliados.totalMujeres + EPS.afiliados.totalHombres;
        let porcentaje = Math.round((EPS.afiliadosVacunados * 100) / totalAfiliados);
        console.log(`Porcentaje Afiliados Vacunados ${porcentaje}%`);

    }
}
obtenerPorcentajeVacunados();
//La eps ha decidido adicionar a su fuente de datos (Objeto) una seccion (Atributo) que permita llevar un control de las tutelas y demandas cumplidas e incumplidas
//contando con los siguientes valores iniciales 
//Total Tutelas = 35800
//Tutelas Cumplidas = 1200
//Tutelas Incumplidas = 28000
//Total Demandas = 15000
//Demandas Cumplidas = 150
//Demandas Incumplidas = 3000
let sanciones = {
    'tutelas': {
        'total': 35800,
        'cumplidas': 1200,
        'incumplidas': 28000
    },
    'demandas': {
        'total': 15000,
        'cumplidas': 150,
        'incumplidas': 3000
    }
}
EPS.sanciones = sanciones;
console.log(EPS);
//determine el numero total de tutelas y demandas pendientes (total-cumplidas-incumplidas)
