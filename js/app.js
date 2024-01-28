const articuloFecha = document.querySelectorAll('.articulo__fecha');


function crearFecha() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const fullDate = `
    <span>Publication date:</span>
    <span class="articulo__span">${day}-0${month + 1}-${year}</span>
    `;

    return fullDate;
}

articuloFecha.forEach((articulo) => {
    articulo.innerHTML = crearFecha();
})


