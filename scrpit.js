var overlay = document.querySelector("#overlay")
var scroll = document.querySelector("#scroll")
overlay.addEventListener("mousemove",function(dets){
  scroll.style.left = `${dets.x -100}px`
  scroll.style.top = `${dets.y -100}px`
})