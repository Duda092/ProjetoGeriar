const btn = document.getElementById('butao')


btn.addEventListener('click', function validarFormulario(){
   const nome = document.getElementById('name').value
   const email = document.getElementById('emailid').value
   const senha = document.getElementById('senhaid').value
   const telefone = document.getElementById('telefoneid').value
   const endereco = document.getElementById('enderecoid').value
   const identidade = document.getElementById('identidadeid').value
   const cpf = document.getElementById('cpfid').value
   
    if(nome == ''){
       alert('Nome vazio por favor digite um nome')
       return false
   }    
   if(nome == Number){
      alert('Números não são validos')
      return false
   } 


    if(email == '' ){
       alert('Email vazio por favor digite um email')
       return false
   }    
    if(senha == '' ){
       alert('Senha vazia por favor digite uma senha')
       return false
   }    
    if(telefone == '' ){
       alert('Telefone vazio por favor digite um telefone')
       return false
   }    
    if(endereco == '' ){
       alert('Endereço vazio por favor digite um endereço')
       return false
   }    
    if(identidade == ''){
       alert('identidade vazia por favor digite uma identidade')
       return false
   }    
    if(cpf == '' ){
       alert('CPF vazio por favor digite um CPF')
       return false
   }   

})

const btnlg = document.getElementById('btnlg')

btnlg.addEventListener('click', function irCadastro(){





})
    
   
   
