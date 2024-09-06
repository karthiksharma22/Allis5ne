const mobile_nav = document.querySelector(".menu")
const mobile_nav2= document.getElementById('icon')
const header = document.querySelector(".list")
const toggle = ()=>
{
   
        header.style.display='block'
        
        mobile_nav.style.display='none'
        mobile_nav2.style.display='block'
        mobile_nav2.style.backgroundcolor='white'
}
const toggle2 = ()=>
{
        header.style.display='none'
        mobile_nav.style.display='block'
        mobile_nav2.style.display='none'
        mobile_nav2.style.backgroundcolor='white'
}

mobile_nav.addEventListener("click",()=>toggle())
mobile_nav2.addEventListener("click",()=>toggle2())