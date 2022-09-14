var tickey =function(name,price,discount,have){
    this.name=name
    this.price=price
    this.discunt=discount
    this.have=have
    this.totle=function(){
      return console.log("你的票價:"+this.price*this.discunt+"元")
    }
    this.changh=function(res){
      console.log(this.name+"把"+this.have+"張票給了"+res.name)
      res.have=this.have
      this.have=0
    }
}

var person1=new tickey("kevin",520,0.5,2)
var person2=new tickey("henrry",320,0.8,0)
person1.totle()
person2.totle()
person1.changh(person2)
console.log(person2.have)