const bikes = document.querySelectorAll('.bike');

  bikes.forEach(function(bike) {
    bike.addEventListener('click', function () {
      if (bike.classList.contains('vago')) {
        const confirmar = confirm('Você confirma que quer esta vaga?');
        if (confirmar) {
          bike.classList.remove('vago');
          bike.classList.add('ocupado');
        }
      } else {
        alert('Esta vaga já está ocupada.');
      }
    });
  });