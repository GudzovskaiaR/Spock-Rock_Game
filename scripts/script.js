const allCardPlayer=document.querySelector('.figures-player');
const allCardComputer=document.querySelector('.figures-computer')

// const counterPlayer = document.querySelector('.counter-player')

 

const infoCardPlayer = {
    class: 'imgPlayer',
    id: ['imgPlayer1', 'imgPlayer2', 'imgPlayer3', 'imgPlayer4', 'imgPlayer5'],
    src: ['images/rock-player.png', 'images/paper-player.png', 'images/scissors-player.png', 'images/lizard-player.png', 'images/spock-player.png' ],
    text: ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
}
const infoCardComputer = {
    class: 'imgComputer',
    id: ['imgComputer1', 'imgComputer2', 'imgComputer3', 'imgComputer4', 'imgComputer5'],
    src: ['images/rock-computer.png', 'images/paper-computer.png', 'images/scissors-computer.png', 'images/lizard-computer.png', 'images/spock-computer.png' ],
    text: ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
}
// Рендер гри ================================================================================================
function renderGame(object, placeRendering){
    placeRendering.innerHTML =  `
     <div><img  class=${object.class}  src=${object.src[0]} alt="" id=${object.id[0]} text=${object.text[0]}></div>
     <div><img class=${object.class} src=${object.src[1]} alt="" id=${object.id[1]} text=${object.text[1]}></div>
     <div><img class=${object.class} src=${object.src[2]} alt="" id=${object.id[2]} text=${object.text[2]}></div>
     <div><img class=${object.class} src=${object.src[3]} alt="" id=${object.id[3]} text=${object.text[3]}></div>
     <div><img class=${object.class} src=${object.src[4]} alt="" id=${object.id[4]} text=${object.text[4]}></div>
 `
    const arrCardPlayer = document.querySelectorAll('.imgPlayer');
    arrCardPlayer.forEach((item)=>item.addEventListener('click',  figureSelectionByPlayer));
}
// Рендер гри гравця========================================================================================
renderGame(infoCardPlayer, allCardPlayer)

// // Рендер гри гравця====================================================================================
// function renderGamePlayer(elementByPlayer){
 

//   allCardPlayer.innerHTML =  `
//     <div  id="rock-player"><img  class="imgPlayer"  src=${elementByPlayer.src[0]} alt="" id=${elementByPlayer.id[0]} text=${elementByPlayer.text[0]}></div>
//     <div  id="paper-player"><img class="imgPlayer" src=${elementByPlayer.src[1]} alt="" id=${elementByPlayer.id[1]} text=${elementByPlayer.text[1]}></div>
//     <div  id="scissors-player"><img class="imgPlayer" src=${elementByPlayer.src[2]} alt="" id=${elementByPlayer.id[2]} text=${elementByPlayer.text[2]}></div>
//     <div  id="lizard-player"><img class="imgPlayer" src=${elementByPlayer.src[3]} alt="" id=${elementByPlayer.id[3]} text=${elementByPlayer.text[3]}></div>
//     <div  id="spock-player"><img class="imgPlayer"src=${elementByPlayer.src[4]} alt="" id=${elementByPlayer.id[4]} text=${elementByPlayer.text[4]}></div>
// `
//     const arrCardPlayer = document.querySelectorAll('.imgPlayer');
//     arrCardPlayer.forEach((item)=>item.addEventListener('click',  figureSelectionByPlayer));

   
   
// }





// Вибір фігури гравцем===================================================================================

    function figureSelectionByPlayer(event){
    const choiceElement = event.currentTarget;
   
    const nameCardPlayer = choiceElement.getAttribute('text')
    const nameSpanPlayer = document.querySelector('.choice-player')
 

   

    // Зміна кольору фігури гравця
   switch(choiceElement.id){
    case 'imgPlayer1':
        infoCardPlayer.src = ['images/rock-choice.png', 'images/paper-player.png', 'images/scissors-player.png', 'images/lizard-player.png', 'images/spock-player.png' ] ; break; 
        case 'imgPlayer2':
            infoCardPlayer.src = ['images/rock-player.png', 'images/paper-choice.png', 'images/scissors-player.png', 'images/lizard-player.png', 'images/spock-player.png' ] ; break;
        case 'imgPlayer3':
            infoCardPlayer.src = ['images/rock-player.png', 'images/paper-player.png', 'images/scissors-choice.png', 'images/lizard-player.png', 'images/spock-player.png' ] ; break; 
        case 'imgPlayer4':
            infoCardPlayer.src = ['images/rock-player.png', 'images/paper-player.png', 'images/scissors-player.png', 'images/lizard-choice.png', 'images/spock-player.png' ] ; break; 
       default:
        infoCardPlayer.src = ['images/rock-player.png', 'images/paper-player.png', 'images/scissors-player.png', 'images/lizard-player.png', 'images/spock-choice.png' ] ;  
   }
    // Відмальовка назви фігури
    nameSpanPlayer.innerHTML = `${nameCardPlayer}`
    renderGame(infoCardPlayer, allCardPlayer)
     choiceComputer(infoCardComputer);
}

// Рендер гри компьютера=======================================================================================
renderGame(infoCardComputer, allCardComputer)
// // Рендер гри компьютера==================================================================================
// function renderGameComputer(elementByComputer){
//     allCardComputer.innerHTML = `
//     <div id="rock-computer"><img class="imgComputer" src="${elementByComputer.src[0]}" alt="" id="${elementByComputer.id[0]}" text ="${elementByComputer.text[0]}"></div>
//     <div id="paper-computer"><img class="imgComputer" src="${elementByComputer.src[1]}" alt="" id="${elementByComputer.id[1]}" text ="${elementByComputer.text[1]}"></div>
//     <div id="scissors-computer"><img class="imgComputer" src="${elementByComputer.src[2]}" alt="" id="${elementByComputer.id[2]}" text ="${elementByComputer.text[2]}"></div>
//     <div id="lizard-computer"><img class="imgComputer" src="${elementByComputer.src[3]}" alt="" id="${elementByComputer.id[3]}" text ="${elementByComputer.text[3]}"></div>
//     <div id="spock-computer"><img class="imgComputer" src="${elementByComputer.src[4]}" alt="" id="${elementByComputer.id[4]}" text ="${elementByComputer.text[4]}"></div>
//  `

// }

// Вибір фігури компьютером==================================================================================
function choiceComputer(element){
    const arrIdCardComputer = element.id;
   
    const choiceCardComputer = arrIdCardComputer[Math.floor(Math.random() * 5)];
   

    //  Зміна кольору фігури компьютера============================================================================== 
 switch(choiceCardComputer){
   
    case 'imgComputer1':
    infoCardComputer.src = ['images/rock-choice.png', 'images/paper-computer.png', 'images/scissors-computer.png', 'images/lizard-computer.png', 'images/spock-computer.png' ] ; break;
    case 'imgComputer2':
        infoCardComputer.src = ['images/rock-computer.png', 'images/paper-choice.png', 'images/scissors-computer.png', 'images/lizard-computer.png', 'images/spock-computer.png' ] ; break; 
    case 'imgComputer3':
            infoCardComputer.src = ['images/rock-computer.png', 'images/paper-computer.png', 'images/scissors-choice.png', 'images/lizard-computer.png', 'images/spock-computer.png' ] ; break; 
    case 'imgComputer4':
                infoCardComputer.src = ['images/rock-computer.png', 'images/paper-computer.png', 'images/scissors-computer.png', 'images/lizard-choice.png', 'images/spock-computer.png' ] ; break; 
    default:
                    infoCardComputer.src = ['images/rock-computer.png', 'images/paper-computer.png', 'images/scissors-computer.png', 'images/lizard-computer.png', 'images/spock-choice.png' ] ;  

 }
 renderGame(infoCardComputer, allCardComputer)

//  Відмальовка назви фігури компьютера==============================================================================================
 const choiceFigureComputer =  document.getElementById(`${choiceCardComputer}`);
 const nameCardComputer = choiceFigureComputer.getAttribute('text');
 const nameSpanComputer = document.querySelector('.choice-computer');
 nameSpanComputer.innerHTML = `${nameCardComputer}`

}








