
  // Espera 2 segundos antes de abrir el modal
  window.addEventListener('load', () => {
    setTimeout(() => {
      const modalTrigger = new bootstrap.Modal(document.getElementById('popupModal'));
      modalTrigger.show();
    }, 10000);
  });