function validaLogin(event){
    event.preventDefault() //evita o recarregamento da página 

    //obtendo os valores digitados nos campos
    let email = btoa (document.getElementById('email').value )
    let senha = btoa (document.getElementById('senha').value )

    if(!email || !senha){
        alert('É obrigatório informar o e-mail e a senha!')
        return
    }

    if(email == 'admin@gmail' && senha == 'admin'){
       //carrega a página principal
       window.location.href = "cadastro.html"
    } else {
        window.location.href = "cadastro.html"
    }
}
