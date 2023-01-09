'use strict'

//Criando referência para o botão-->
const switcher = document.querySelector('.bnt'); 

//Adicionando ouvinte para o manipulador de evento click-->
//toggle elemento usado para alternar o elemento para a classe dark-theme-->
switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
//If para verificar o tema atual e atualizar o rótulo do botão-->
    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark theme"
    }
    else{
        this.textContent = "Light theme";
    }
    //Mensagem console que aparecerá nas ferramentas de desenvolvedor-->
    console.log("current class name: " + className);
});

