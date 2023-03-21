const keyboardKeys = document.querySelectorAll(`.key`)
const letter = document.querySelectorAll('.letter')
const caps = document.querySelector('.caps')
const shifts = document.querySelectorAll(`.shift`)


let previousKey = null; // variável para armazenar a tecla pressionada anteriormente

keyboardKeys.forEach(key => {
    // Adiciona o evento 'keypress' para cada tecla do teclado
    window.addEventListener('keydown', (e) => {
        if (key.textContent === e.key.toLowerCase() || key.textContent === e.code.toLocaleLowerCase()) {

            // Remove a classe 'active' da tecla pressionada anteriormente
            if (previousKey) {
                previousKey.classList.remove('active');
            }
            // Adiciona a classe 'active' na tecla pressionada
            key.classList.add('active');
            // Armazena a tecla pressionada na variável 'previousKey'
            previousKey = key;
        }
    });
});





const container = document.querySelector('.container')
window.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode
    const key = e.key
    const code = e.code
    container.innerHTML = `
    <ul>
        <li>
            <h6>event.key</h6>
            <p>${key === ' ' ? 'Space' : key}</p>
        </li>
        <li>
            <h6>event.keyCode</h6>
            <p>${keyCode}</p>
        </li>
        <li>
            <h6>event.code</h6>
            <p>${code}</p>
        </li>
    </ul>
    
    `

})

window.addEventListener('keydown', function (e) {
    if (e.getModifierState('CapsLock')) {
        caps.classList.add('indicator')
        letter.forEach(l => l.classList.add('uppercase'))
    } else {
        caps.classList.remove('indicator')
        letter.forEach(l => l.classList.remove('uppercase'))
    }
    if (e.shiftKey && e.code.toLocaleLowerCase() === shifts[0].textContent) {
        shifts[0].classList.add(`indicator`)
        letter.forEach(l => l.classList.add('uppercaseS'))
    } else if(e.shiftKey && e.code.toLocaleLowerCase() === shifts[1].textContent) {
        shifts[1].classList.add(`indicator`)
        letter.forEach(l => l.classList.add('uppercaseS'))
}});

window.addEventListener(`keyup`, (e) =>{
    if (!e.shiftKey){
        shifts.forEach(shift => shift.classList.remove('indicator'))
        letter.forEach(l => l.classList.remove('uppercaseS'))
    }
})