const avatar = document.querySelector('.avatar')
const modifyButtonText = document.querySelector('#modify-button-text')
const modifyButtonList = document.querySelector('#modify-button-list')
const lien = document.querySelectorAll('a')
const listFront = document.querySelectorAll('#front-dev-tools > li')
const listBack = document.querySelector('.list-back')
const addTools = document.querySelector('#add-tools')
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
    listFront.forEach((element, index) => {
        element.textContent = newList[index]
    })
})

addTools.addEventListener('click', () => {
    const newElement = document.createElement('li')
    const tools = document.querySelector('#tools')
    newElement.innerHTML = tools.value
    tools.value = ""
    listBack.appendChild(newElement)
})

lien.forEach(element => {
    element.style.color = '#750ff7'
});