const avatar = document.querySelector('.avatar')
const modifyButtonText = document.querySelector('#modify-button-text')
const modifyButtonList = document.querySelector('#modify-button-list')
const lien = document.querySelectorAll('a')
const list = document.querySelectorAll('#front-dev-tools > li')
const newList = ['VSCode', 'Github', 'Terminal']

avatar.addEventListener('click', () => {
    avatar.src = './image/avatar.svg'
})

modifyButtonText.addEventListener('click', () => {
    const color = prompt('Enter a color')
    const name = prompt('Enter yout name :')
    const firstName = document.querySelector('#firstname')
    firstName.textContent = name
    firstName.style.color = 'white'
    document.documentElement.style.setProperty('--lightWildColor', color);
})

modifyButtonList.addEventListener('click', () => {
    list.forEach((element, index) => {
        element.textContent = newList[index]
    })
})

lien.forEach(element => {
    element.style.color = '#750ff7'
});