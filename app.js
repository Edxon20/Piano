
const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl){
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey,i) => {

    const number = i < 9 ? '0' + (i+1) : (i+1);
    //'24-piano-keys/key02.mp3'
    const newUrl ='24-piano-keys/key'+number+'.mp3';
    //We used callback because if i dont use the sounds will be bad
    pianoKey.addEventListener('click',() => playSound(newUrl))  
    
    
})