// On clicking remove button the item should be removed from DOM as well as localstorage.
var nums=JSON.parse(localStorage.getItem("coffee"))
// console.log(nums)
var amount=0


append(nums)

function append(data){
    document.querySelector("#bucket").innerHTML=null


   
        data.forEach(function(el,index){
            document.querySelector("#total_amount").innerHTML=null
          let bag=document.createElement("div")
          bag.setAttribute("id","box")
      
          let Avatar=document.createElement("img")
          Avatar.src=el.image
          Avatar.setAttribute("id","avt")

          let nam=document.createElement("p")
          bag.innerText=el.title
         
      
      
          let price=document.createElement("p")
          bag.innerText=el.price
          amount=amount+(el.price)
        
          
          let cart=document.createElement("button")
          cart.innerText="Remove coffee"
          cart.setAttribute("id", "remove_bucket")
          cart.addEventListener("click", function(){
            deletecof(el)
          })
          
          bag.append(Avatar,nam,price,cart)
          document.querySelector("#bucket").append(bag)
          document.querySelector("#total_amount").append(amount)
        })
      
}

function deletecof(el,index){
    nums.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(nums))
    window.location.reload()
}