function changeAvatar() { let avatar = document.querySelector('#avatar');
    avatar.src = "image/avatar-bis.png";
}

function replaceName() {
    let userName = prompt ("Quel est votre nom ?");
    let nameElement = document.querySelector('#firstname');
    if (userName) {
        nameElement.textContent= userName;
        nameElemment.style.color = "white";
    }
}
   