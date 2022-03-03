$('#formulario').submit(function validacao(){
    var email = $('#email');
    var nome = $('#nome');
    var senha = $("#senha");
    var erro = $('.alert');
    var campo = $('#erro');
 
    
    erro.addClass('d-none');
   $('.is-invalid').removeClass('is-invalid');

   // valida o campo email
   if (email.val() == '') {
    erro.removeClass('d-none');
    campo.html('email'); // nome do campo que não foi preenchido!
    email.focus();
    email.addClass('is-invalid');
    return false;
  }
  
    // valida o campo nome
    if (nome.val() == '') {
      erro.removeClass('d-none');
      campo.html('nome'); // nome do campo que não foi preenchido!
      nome.focus();
      nome.addClass('is-invalid');
      return false;
    }
    // valida o campo senha
    if(senha.val() == '') {
      erro.removeClass('d-none');
      campo.html('senha'); // nome do campo que não foi preenchido!
      senha.focus();
      senha.addClass('is-invalid');
      return false;
    }
  
  return true;
    
});

if(validacao() == true){
  location.href="feed.html";
}