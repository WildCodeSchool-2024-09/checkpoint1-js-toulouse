const avatar = document.querySelector(".hero > img")
const colorThingy = document.querySelector(".color-thingy")
const firstname = document.querySelector("#firstname")
const pinkBg = document.querySelectorAll(".pink-bg")
const pinkText = document.querySelectorAll(".pink-text")

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})

colorThingy.addEventListener("click", () => {
    const text = prompt("Enter text")
    const color = prompt("Enter a color")

    firstname.textContent = text
    firstname.style.color = "white"
    
    for (const element of pinkBg) {
        element.style.backgroundColor = color
    }

    for (const element of pinkText) {
        element.style.color = color
    }
})
