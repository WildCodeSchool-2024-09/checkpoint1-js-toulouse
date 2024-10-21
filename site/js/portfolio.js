const avatar = document.querySelector(".hero > img")
const colorThingy = document.querySelector(".color-thingy")
const firstname = document.querySelector("#firstname")

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})

colorThingy.addEventListener("click", () => {
    const text = prompt("Enter text")

    firstname.textContent = text
    firstname.style.color = "white"
})
