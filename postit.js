var postitElement = document.querySelector("#postit"); //busca a div com id='app' | get the div's id='app'
var addPostitElement = document.createElement('button'); //cria um elemento botão | crete a new button element
var inputElement = document.createElement('input');//cria um elemento input | crete a new button element
var textElement = document.createTextNode('Adicionar Postit'); //cria o rótulo do botão | Create label of button

var deleteMessage = document.createElement('p');
deleteMessage.appendChild(document.createTextNode('Clique duas vezes para remover o postit')); //acrescenta o rotulo ao botão | append label on button

addPostitElement.setAttribute('class', 'botao'); //seta a classe botão ao button | set class botao to button
addPostitElement.appendChild(textElement); //acrescenta o rotulo ao botão | append label on button
postitElement.appendChild(addPostitElement); //acrescenta o botão na div postit | append button on app div

postitElement.appendChild(inputElement);
postitElement.appendChild(deleteMessage); //acrescenta a mensagem de delete| append delete message

addPostitElement.onclick = function () { //configura a ação do botão criado com uma função | setup a funcion action to button 
    createPostit(); //função que desenha um quadrado | funcion to draw square
};


function createPostit() {
    var boxElement = document.createElement('div') //cria novo elemento | create a new element
    
    boxElement.onclick = function(){ //adicionada a propriedade onclick com a execução da função para mudar a cor
        boxElement.style.backgroundColor = getRandomColor(); //mudando a cor do quadrado
    };

    boxElement.ondblclick = function(){
        boxElement.style.display = "none";
    }
  
    boxElement.style.width = '200px'; // adiciona a largura 100 | set width 100
    boxElement.style.height = '200px';// adiciona a altura 100 | set height 100
    boxElement.style.backgroundColor = getRandomColor(); //adiciona a cor vermelha | set red color
    boxElement.style.textAlign = 'center'; //adiciona a cor vermelha | set red color
    
    boxElement.appendChild(document.createTextNode(inputElement.value));
    postitElement.appendChild(boxElement); //acrescenta o novo elemento a div app | apend a new element to div app
};


function getRandomColor() { //gera cor randomicamente. (autor: Rocketseat)
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

