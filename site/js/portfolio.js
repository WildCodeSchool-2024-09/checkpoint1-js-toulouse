const avatar = document.querySelector(".avatar-bis") 
    avatar.addEventListener("click", (event) => {
        if (event.target.src === "./image/avatar.svg") {
            event.target.src = "../image/avatar-bis.png";
          } else {
            event.target.src = "./image/avatar.svg";
          }
    }) ;

    const userName = document.getElementById("#firstname") 
    const button = document.querySelector(".button")
    const backgroundColor = document.querySelectorAll(".pink-bg")
    const color = document.querySelector(".button")
    button.addEventListener("click", (event) => {
        color = prompt("Enter your color")
        firstname.innerHTML = prompt("Quel est votre nom ?");
        firstname.style.color = "white";});