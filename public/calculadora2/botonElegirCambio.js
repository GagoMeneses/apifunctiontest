document.addEventListener('DOMContentLoaded', function() {
  // Establece el valor inicial y dispara el evento 'change'
  const initialValue = document.querySelector('.toggle-button.active').id;
  updateExchangeSource(initialValue);
});

function updateExchangeSource(value, activeDiv = document.getElementById('exchangeRate')) {
  const selectElement = document.getElementById('exchangeSource');
  selectElement.value = value;

  // Crea y dispara el evento 'change'
  const event = new Event('change');
  selectElement.dispatchEvent(event);

  // Actualiza la clase activa para el div correspondiente
  document.querySelectorAll('.toggle-button').forEach(button => {
      button.classList.remove('active');
  });
  activeDiv.classList.add('active');
}

document.getElementById('exchangeRate').addEventListener('click', function() {
  updateExchangeSource('BCV', this);
});

document.getElementById('paralelRate').addEventListener('click', function() {
  updateExchangeSource('Paralelo', this);
});
