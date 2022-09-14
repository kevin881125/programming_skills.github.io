var cataurl = "https://2017.awiclass.monoame.com/api/demo/shop"
var imgurl = "https://2017.awiclass.monoame.com/"
var items=[]

function downloadList(){
  $.ajax({
    url:cataurl,
    success:function(res){
      console.log(res)
      items=res
      updateList()
    },
    error:function(){
      console.log("載入失敗")
    }
  })
}


function updateList(){
  $("ul#shoplist").html("")
  items.forEach((item)=>{
    var a = `
      <li data-id="${item.id}">
        <img src="${imgurl}${item.img}">
        <h3>${item.name}</h3>
      </li>
     `
    var b = $(a)
    b.click(function(){
      var selected = $(this).attr("data-id")
      console.log(selected)
      updataselect(selected)
    })
    $("ul#shoplist").append(b)
  })
}

function updataselect(id){
  $.ajax({
    url: cataurl + "/"+id,
    success: function(res){
      var content = `
      <ul>
        <li>名字:${res.name}</li>
        <li>價格:${res.price}</li>
        <li>顏色:${res.color}</li>
        <li>尚有存貨:${res.count}</li>
        <li>描述:${res.description}</li>
 
      </ul>
      `
      console.log(res)
      $("p.selectinfo").html(content)
    }
  })
  
}