const input = document.getElementById('totalAmountToPay');
  const experimentoDiv = document.getElementById('experimento');

  input.addEventListener('input', function() {
    // Convertir el valor del input a un número
    const value = Number(input.value);
    // Mostrar u ocultar el div basado en si el valor es mayor que 0
    experimentoDiv.style.display = value > 0 ? 'block' : 'none';
  });