(() => {
  function verificar() {
    window.event.preventDefault();

    if (form.nome.value == '') {
      form.nome.focus();
      Swal.fire({
        title: 'O campo nome é obrigatório.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    }

    if (form.email.value == '') {
      form.email.focus();
      Swal.fire({
        title: 'O campo email é obrigatório.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (form.email.value.indexOf('@') == -1 || form.email.value.indexOf('.') == -1 || (form.email.value.indexOf('.') - form.email.value.indexOf('@') == 1)) {
      form.email.focus();
      Swal.fire('Complete o email corretamente.');
      return false;
    }

    if (form.assunto.value == '') {
      form.assunto.focus();
      Swal.fire({
        title: 'Escreva o assunto.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (form.assunto.value.length >= 50) {
      Swal.fire('Digite no máximo 50 caracteres');
      return false;
    }

    if (form.mensagem.value == '') {
      form.mensagem.focus();
      Swal.fire({
        title: 'Escreva uma mensagem.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (form.mensagem.value.length >= 100) {
      Swal.fire('Digite no máximo 300 caracteres');
      return false;
    }

  }

  document.querySelector('form').addEventListener('submit', verificar);
})();
