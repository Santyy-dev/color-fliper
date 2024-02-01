let color = document.getElementById("color")
let button = document.getElementById("button")
let wrap  = document.getElementById("wrap")
let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

button.addEventListener("click",changebg)

function changebg(){
    let hexcolor = "#"
    for(let i=1;i<=6;i++){
        hexcolor += ranhexvalue()  
        
}

color.innerHTML = hexcolor
wrap.style.backgroundColor = hexcolor
console.log(hexcolor)
}


function ranhexvalue(){
    let ranhexvalue = Math.floor(Math.random()*16)
    return hex[ranhexvalue]
}
