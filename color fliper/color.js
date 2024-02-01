let color = document.getElementById("color")
let button =  document.getElementById("button")
let wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,,5,6,7,8,9,"A","B","C","D","E","F"]

button.addEventListener("click",

function(){
    let hexcolor = "#"
    for(let i=1;i<=6;i++){
        hexcolor += ranhexvalue()
    }
    wrap.style.backgroundColor = hexcolor
    color.innerHTML = hexcolor


}
)


function ranhexvalue(){
  let ranhexvalue = Math.floor(Math.random()*16)
  return hex[ranhexvalue]
}
