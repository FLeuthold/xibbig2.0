let infraLeft = 5;
let infraDX = 50;

let leftOffset = 300;
let topOffset = 300;
let rotateAngle = 0;
let width = 600;

const getRandomInteger = max =>  Math.floor((Math.random() -.5 ) * max)


setInterval(inframove,500)


for (let i = 0; i < 10; i++) {
  let xibbig = new Image()
  xibbig.className = "xibbigge"
  xibbig.src = "img/smartlearn_alpha.png"
  xibbig.id = "xibbig" + i
  xibbig.zIndex = i; 
  gibbixbehaelter.appendChild(xibbig)
  //TimerHandler (not EventHandler)
  setInterval(gibbixmove,1000,xibbig.id)
}

function inframove(){

  let infra = document.getElementById("infra");
  if (infraLeft  < -10 |  infraLeft > 800 + 10) {
    infraDX = -infraDX
  }
  infraLeft = infraLeft + infraDX
  infra.style.left = infraLeft + "px"
}

function gibbixmove(xibbigid) {
  let xibbig = document.getElementById(xibbigid)
  let rand =  getRandomInteger(50)
  rotateAngle = rotateAngle + rand  
  xibbig.style.transform = "rotate(" + (rotateAngle ) + "deg)"

}