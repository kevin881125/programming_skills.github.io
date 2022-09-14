$(function(){
  for(var i=0;i<7*7;i++){
  $("#board").append($("<li>"))
  $("#board li").text(function(e){
    return e+1
  })
  $("#board li:even").addClass("black")
  var imgurl="<img src='https://cdn3.iconfinder.com/data/icons/business-marketing-advertising-blue-and-red/64/Marketing_chessman_chess_figure_strategy-512.png'>"
    $("#board li:nth-child(7n+3)").html(function(){
      var isblack=$(this).hasClass("black")
      if(isblack){
        return imgurl
      }
    })
  }
  $("img:first").hide(1000,function(){
    setTimeout(function(){
      $("img:last").hide(1000)
    },1000)
  })
  
})