$('#formulario').submit(function validacao(){
    var nome = $('#nome');
    var senha = $("#senha");
    var erro = $('.alert');
    var campo = $('#erro');
 
    // removendo o elemento da tela sempre que tentar submeter o formulario
    //erro.addClass('d-none');
   // $('.is-invalid').removeClass('is-invalid');
  
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