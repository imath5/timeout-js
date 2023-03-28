let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')


botaoCadastrar.onclick = function () {
    toast.classList.add('visible');

//setTimeout -> espera 'x' segundos para executar a função 'x' abaixo
    setTimeout(function(){
        toast.classList.remove('visible');
    }, 3000)
}


// OU //

/* let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

function removeToast (){
    toast.classList.remove ('visible')
}

botaoCadastrar.onclick = function () {
    toast.classList.add('visible');

    setTimeout(removeToast, 3000)
} */