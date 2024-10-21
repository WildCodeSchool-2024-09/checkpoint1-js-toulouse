const avatar = document.querySelector('.avatar')
const modifyButton = document.querySelector('.modify-button')

avatar.addEventListener('click', () => {
    avatar.src = './image/avatar.svg'
})

modifyButton.addEventListener('click', () => {
    const color = prompt('Enter a color')
    const name = prompt('Enter yout name :')
    const firstName = document.querySelector('#firstname')
    firstName.textContent = name
    firstName.style.color = 'white'
    document.documentElement.style.setProperty('--lightWildColor', color);
})