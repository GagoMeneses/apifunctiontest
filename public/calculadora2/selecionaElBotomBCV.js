// este script lo que hace es seleccionar el boton BCV para que la palicacion pueda estar funcional desdeel principio.


document.addEventListener('DOMContentLoaded', function() {
    var exchangeRateDiv = document.getElementById('exchangeRate');
    if (exchangeRateDiv) {
        exchangeRateDiv.classList.add('active');
    }
});

