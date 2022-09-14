$(".ajaxbtn").click(function(evt){
  evt.preventDefault()
  console.log("ajax送出")
  post()
})

function post(){
  var datas=$("form").serializeArray()
  console.log(datas)
  datas.find((obj)=>obj.name=='json').value="true"
  $.ajax({
    url:"https://2017.awiclass.monoame.com/api/demo/feedback",
    method:"post",
    data:datas,
    success:function(res){
      console.log("ajax成功:")
      console.log(res)
      $(".feedback").text(res.response)
      
    }
    
  })
}