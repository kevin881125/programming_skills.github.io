console.clear()
var numbers=[1,2,3,4,5,6,7]

numbers.forEach(function(numbers){
  console.log(numbers)
})

var result = numbers.map(function(num){
    return num*num
})
console.log(result)

var result2=numbers.filter(function(num){
  return num%2==0
})
console.log(result2)

var result3=numbers.find(function(num){
  return num>3
})
console.log(result3)

var result4 = numbers.every(function(num){
    return num>0
})
console.log(result4)

var result5 = numbers.some(function(num){
    return num>8
})
console.log(result5)


var acts=[
  {
    name:"聖誕節",
    attend:40,
    price:200,
    cost:7000
  },
  {
    name:"平面設計",
    attend:30,
    price:500,
    cost:9000
  },
  {
    name:"新年燈山",
    attend:60,
    price:100,
    cost:1000
  },
]

acts.forEach(function(acts,i){
  console.log( i+1 +":"+acts.name)
})

var act2=acts.map(function(a){
  return{
    name:a.name,
    total: a.attend*a.price-a.cost
  }
})
console.log(act2)

var act3= acts.filter(function(b){
  return b.price<=200
})
console.log(act3)

var act4= acts.find(function(b){
  return b.price<=200
})
console.log(act4)
var num=[1,5,4,9,8,2]
num.sort(function(a,b){
  return a-b
})
console.log(num)

var total = num.reduce(function(tatle,n){
  return tatle+n
},0)

console.log(total)