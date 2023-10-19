/*
    Crea una página web que muestre una lista de estudiantes y sus promedios. La página debe realizar las siguientes tareas:

    1. Mostrar la lista de 10 estudiantes.
    2. Resaltar en color verde a los estudiantes que tengan un promedio de 10.
    3. Calcular el promedio general de la clase y mostrarlo en algun lugar de la pagina.
*/

const claseJSON = '{"estudiantes":[{"nombre":"Juan","promedio":7},{"nombre":"Pedro","promedio":9},{"nombre":"Maria","promedio":8},{"nombre":"Carlos","promedio":10},{"nombre":"Ana","promedio":7},{"nombre":"Pablo","promedio":10},{"nombre":"Matias","promedio":6},{"nombre":"Ezequiel","promedio":8},{"nombre":"Florencia","promedio":9},{"nombre":"Roxana","promedio":7}]}'
const clase = JSON.parse(claseJSON)
let tablaEst = document.querySelector('table')
let suma = 0
let cont = 0
    

clase.estudiantes.forEach(estudiante => {
    let filEst = tablaEst.insertRow(-1)
    let nomEst = filEst.insertCell(0)
    let promEst = filEst.insertCell(1)
    if (estudiante.promedio == 10) {
        nomEst.innerHTML = `<span class="verde"> ${estudiante.nombre}</span>`                
        promEst.innerHTML = `${estudiante.promedio}`
    } else {
        nomEst.innerHTML = `<span> ${estudiante.nombre}</span>`                
        promEst.innerHTML = `${estudiante.promedio}`
    }
    
    cont = ++cont
    suma = suma + estudiante.promedio
});

let filProm = tablaEst.insertRow (-1)
let totProm = filProm.insertCell()
totProm.innerText = `El promedio general de la clase es: ${suma/cont} `
totProm.colSpan = (2)

