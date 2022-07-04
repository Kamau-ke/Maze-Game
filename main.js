const nextButton=document.querySelector('.next-button')
const levelOne=document.querySelector('.level-one');
const levelTwo=document.querySelector('.level-two');
const uiLevel=document.querySelector('.ui-level')
const uiMessage=document.querySelector('.ui-message');
const scream=document.querySelector('.scream-sound')
const spoky=document.querySelector('.spoky')

const collisionCheck=(value)=>{
    if(value=='maze-border') alert('you lost.. try again') 
    if(value=='finish'){
        nextButton.style.opacity=1;
        nextButton.style.pointerEvents='all'
        levelOne.style.pointerEvents='none'
    }
    if(value=='end-game'){
        scream.play();
        spoky.style.display='block'
        document.body.style.background='black'
    }
}
window.addEventListener('mousemove', (e)=>{
    let mouseEvent=e.target.classList.value;
    
    collisionCheck(mouseEvent)
})

nextButton.addEventListener('click', ()=>{
    levelOne.style.display='none'
    levelTwo.style.display='block'
    nextButton.style.opacity=0;
    nextButton.pointerEvents='none';
    uiLevel.textContent='Level Two'
    uiMessage.textContent='One More to go...'

})