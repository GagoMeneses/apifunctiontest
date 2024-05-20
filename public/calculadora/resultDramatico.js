document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('totalAmountToPay');
  const resultDiv = document.getElementById('result');

  input.addEventListener('input', function() {
      if (parseFloat(input.value) > 0) {
          resultDiv.style.display = 'block';
          fadeIn(resultDiv);
      } else {
          fadeOut(resultDiv);
      }
  });

  function fadeIn(element, duration = 3000) {
      element.style.opacity = 0;
      let last = +new Date();
      let tick = function() {
          element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
          last = +new Date();
          
          if (+element.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
          } else {
              element.style.opacity = 1;
          }
      };
      tick();
  }

  function fadeOut(element, duration = 3000) {
      element.style.opacity = 1;
      let last = +new Date();
      let tick = function() {
          element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
          last = +new Date();
          
          if (+element.style.opacity > 0) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
          } else {
              element.style.opacity = 0;
              element.style.display = 'none';
          }
      };
      tick();
  }
});


