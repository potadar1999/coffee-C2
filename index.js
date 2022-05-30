// Add the coffee to local storage with key "coffee"

getData()

async function getData(){
let url="https://masai-mock-api.herokuapp.com/coffee/menu"

let res = await fetch(url)
let data= await res.json()
console.log(data)
append(data.menu.data)
} 
  
function append(data){
  data.forEach(function(el){
    let bag=document.createElement("div")
    bag.setAttribute("id","box")

    let Avatar=document.createElement("img")
    Avatar.src=el.image
    Avatar.setAttribute("id","avt")


    let price=document.createElement("p")
    bag.innerText=el.price
    
    let cart=document.createElement("button")
    cart.innerText="Add To Bucket"
    cart.setAttribute("id", "add_to_bucket")
    cart.addEventListener("click", function(){
      addtocard(el)
    })
    
    bag.append(Avatar,price,cart)
    document.querySelector("#menu").append(bag)
  })
}

var nums=JSON.parse(localStorage.getItem("coffee"))||[]
function addtocard(el){
document.getElementById("coffee_count").innerHTML=null

var count=0;

nums.push(el)
localStorage.setItem("coffee",JSON.stringify(nums))
var count=nums.length
console.log(count)

document.getElementById("coffee_count").append(count)

}
