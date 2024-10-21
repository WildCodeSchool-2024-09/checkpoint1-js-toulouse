
    const img = document.querySelector('.avat')
    const button = document.querySelector('.changebutton')
   let prenomhtml = document.querySelector('#firstname')
   let bgcolor = document.querySelector('.pink-bg')
   let root = document.querySelector(':root');
   
    img.addEventListener("click",function(){
        img.src = "./image/avatar.svg"
    })
   
   
    button.addEventListener("click",function(){
      const prenom = prompt("ton prenom?")
      const colored = prompt("ta couleur?")
        prenomhtml.innerHTML = prenom
        prenomhtml.style.color = "white"
        root.style.setProperty('--lightWildColor', colored)
   })