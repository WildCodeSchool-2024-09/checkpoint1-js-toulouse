const avatar = document.querySelector(".hero > img")
const colorThingy = document.querySelector(".color-thingy")
const firstname = document.querySelector("#firstname")
const description = document.querySelector(".description")

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})

colorThingy.addEventListener("click", () => {
    const text = prompt("Enter text")
    const color = prompt("Enter a color")

    firstname.textContent = text
    firstname.style.color = "white"
    description.style.backgroundColor = color
})
