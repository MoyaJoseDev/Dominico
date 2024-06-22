document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const totalImages = 82; // Define el número total de imágenes

    for (let i = 1; i <= totalImages; i++) {
        // Crear el contenedor de la columna
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-4','col-md-6', 'mb-4');

        // Crear el elemento de imagen
        const img = document.createElement('img');
        img.classList.add('w-100', 'mb-4', 'rounded','g-image');
        img.src = `assets/images/galeria (${i}).jpg`;

        // Añadir la imagen al contenedor de la columna
        colDiv.appendChild(img);

        // Añadir la columna a la galería
        gallery.appendChild(colDiv);
    }
});
