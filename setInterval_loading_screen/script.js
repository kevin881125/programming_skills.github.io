var percent=0
function text(){
  $(".monsterText").html("We are<br>SQUARE<br>MONSTER")
}
var timer=setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent=percent+1
  if(percent>100){
    clearInterval(timer)
    $(".pageloading").addClass("complete")
    setTimeout(text,3000)
  }
},30)