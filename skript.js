let rotateAngle = 90;
let left = 90;
let topp = 90;
let zehntner = 1;
let infraX = 0;
let infraDX = 50;

infra.setAttribute("style","zIndex: -30 ")
setInterval(mooveit,40, infra);
for (let i = 0; i < 10; i++) {
  setTimeout(addSmartlearn, i * 1000, i);
}
setTimeout(jumpScare, 11*1000)

function mooveit(infra){
      if (infraX > document.documentElement.offsetWidth - infra.clientWidth) {
        infraDX= - 50
      }
      if (infraX < -1) {
        infraDX= 50
      }
      infraX = infraX+infraDX;
      infra.setAttribute("style","zIndex: -30;left:"+infraX+"px;")
}

function addSmartlearn(i){
  let dymimg = new Image();
  dymimg.src = "img/smartlearn_alpha.png";
  let gb = document.getElementById("gibbixbehaelter");
  gb.appendChild(dymimg);
  let inti=  setInterval(rotate,100, dymimg, i);
}

function jumpScare(){
  const animation = new Image();
  animation.src = "img/explosion.gif";
  animation.style.height = '500px';
  animation.style.top = '200px'
  animation.style.zIndex = '20';
  animation.id = "explosion"
  let gb = document.getElementById("keksplosion");
  gb.appendChild(animation);
  let autio = document.getElementById("kekw")
  autio.autoplay="true";
  autio.play();
}

function rotate(image, z) {
  
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg);"
  + "top: " + topp+ "%;"+"left: " + left+ "%;"+ "width:100%;"
  + "z-index:" + z +" ; position: absolute;  transition: all 0.1s;");
  
  const getRandom = max => {
      return Math.floor(Math.random() * max) - max / 2;
  };
  rotateAngle = rotateAngle + getRandom(200);
  topp = getRandom(50);
  left = getRandom(50);
}