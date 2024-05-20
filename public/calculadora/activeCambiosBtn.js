
document.querySelectorAll('.btnChanged input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Eliminar la clase active de todos los divs btnChanged
        document.querySelectorAll('.btnChanged').forEach(div => {
            div.classList.remove('active');
        });
        // Agregar la clase active al div padre del radio seleccionado
        this.closest('.btnChanged').classList.add('active');
    });
});

