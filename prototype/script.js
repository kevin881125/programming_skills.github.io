console.clear()
var Person = function(name,age){
  this.name=name
  this.age=age
}
Person.prototype/*這就是安插在Person的功能物件*/.gethtml=function(){
  return`
  <div class="person">
    <img src="https://www.tuktukdesign.com/wp-content/uploads/2021/03/person-icon.jpg">
    <h3>姓名:${this.name}<br>年齡:${this.age}歲</h3>
  </div>
  `
}
Person.prototype.sayhellow=function(){
    console.log("你好!! 我叫"+this.name)
  }

var marry=new Person("marry",40)
var henry=new Person("henry",22)
marry.sayhellow()

$("body").append(marry.gethtml())
$("body").append(henry.gethtml())

var worker = function(name,age,work){
  Person.call(this,name,age)
  this.work=work
}

worker.prototype = Object.create(Person.prototype)/*制定新的物件與繼承物件的鏈結結合*/
worker.prototype.constructor = worker.constructor/*連結到其他物件的鏈結要把那鏈結的this指定到自己(不然他會找到你繼承物件的this)*/
worker.prototype.saywork=function(){
  return`
  <div class="person worker">
    <img src="https://cdn-icons-png.flaticon.com/512/190/190697.png">
    <h3>姓名:${this.name}<br>年齡:${this.age}歲<br>我的工作是:${this.work}</h3>
  </div>
   `
}
var john = new worker("john",55,"engineer")

john.sayhellow() 
$("body").append(john.saywork())