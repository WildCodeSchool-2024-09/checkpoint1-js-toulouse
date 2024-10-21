const avatar = document.querySelector(".avatar-bis") 
    avatar.addEventListener("click", (event) => {
        if (event.target.src === "./image/avatar.svg") {
            event.target.src = "../image/avatar-bis.png";
          } else {
            event.target.src = "./image/avatar.svg";
          }
    }) ;

    const userName = document.querySelector("#firstname")
        prompt("Quel est votre nom ?")
