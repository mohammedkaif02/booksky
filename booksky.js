var pop=document.querySelector(".pop")
var popup=document.querySelector(".popup")
var addbut=document.getElementById("pb")

addbut.addEventListener('click',function(){
    pop.style.display="block"
    popup.style.display="block"
})

 var cancel=document.getElementById("cancelbook")
 cancel.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    popup.style.display="none"
 })


 var can=document.querySelector(".can")
 var title=document.getElementById("tit")
 var author=document.getElementById("au")
 var discript=document.getElementById("dis")
 var addbook=document.querySelector(".add")
 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${discript.value}</p>
    <button  onclick="del(event)" >delete</button>`
    can.append(div)
    pop.style.display="none"
    popup.style.display="none"
 })

 
function del(event){
    event.target.parentElement.remove()
}
