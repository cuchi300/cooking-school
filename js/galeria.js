document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.gallery__grid');
    for(let i = 1; i < 9; i++){
        const imagen = document.createElement('DIV');
        imagen.classList.add('gallery__picture');
        imagen.classList.add('shadow-picture')
        imagen.innerHTML = `
        <picture>
            <source srcset="build/img/imagen_${i}.webp" type="image/webp">
            <img class="gallery__imagen" loading="lazy" src="build/img/imagen_${i}.jpg" width="500" height="300" alt="imagen galeria">
        </picture>
        `;
        galeria.appendChild(imagen);
    }

}