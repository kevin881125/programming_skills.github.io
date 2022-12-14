var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width = 400
canvas.height = 400
var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  ctx.beginPath()
  for(var i=0;i<10;i++)
    {
      let pos = i*50
      ctx.moveTo(pos,0)
      ctx.lineTo(pos,400)
      ctx.fillText(pos,pos,10)
      ctx.moveTo(0,pos)
      ctx.lineTo(400,pos)
      ctx.fillText(pos,10,pos)
    }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.fillStyle="#ed5a2a"
  ctx.fillRect(300,300,50,50)
  ctx.strokeRect(300,300,50,50)
  ctx.beginPath()
    ctx.rect(250,250,50,100)
    ctx.rect(50,300,50,50)
  ctx.fillStyle = "#ffe14f"
  ctx.fill()
  ctx.stroke()
  ctx.beginPath()
    ctx.rect(100,250,50,100)
    ctx.rect(200,250,50,100)
  ctx.fillStyle = "#ff9f51"
  ctx.fill()
  ctx.stroke()
  ctx.beginPath()
    ctx.moveTo(100,250)
    ctx.lineTo(100,200)
    ctx.lineTo(250,200)
    ctx.lineTo(250,250)
    ctx.lineTo(200,250)
    ctx.arc(175,250,25,Math.PI*2,Math.PI,true)
    ctx.lineTo(150,250)
    ctx.closePath()
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.stroke()
  ctx.beginPath()
    ctx.moveTo(100,200)
    ctx.lineTo(175,150)
    ctx.lineTo(250,200)
  ctx.closePath()
  ctx.fillStyle = "#ed5a2a"
  ctx.fill()
  ctx.stroke()
  ctx.beginPath()
    ctx.moveTo(175,150)
    ctx.lineTo(175,100-muse.y/5)
    ctx.lineTo(200,110-(time%5)-muse.y/5)
    ctx.lineTo(175,120-muse.y/5)
  ctx.closePath()
  ctx.fillStyle = "hsl("+muse.x%360+",50%,50%)"
  ctx.fill()
  ctx.stroke()
  //car
  ctx.fillStyle="white"
  let carx = time%440-40
  ctx.fillRect(carx,325,40,25)
  ctx.strokeRect(carx,325,40,25)
  ctx.beginPath()
    ctx.arc(carx+10,350,5,0,Math.PI*2)
    ctx.arc(carx+30,350,5,0,Math.PI*2)
  ctx.closePath()
  ctx.fillStyle = "black"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(muse.x,muse.y,5,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
  
  
}
setInterval(draw,30)
var muse={x:0,y:0}
canvas.addEventListener("mousemove",function(evt){
  muse.x=evt.offsetX
  muse.y=evt.offsetY
})