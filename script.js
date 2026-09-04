const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("#nav");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const header=document.querySelector(".site-header");
let last=0;
window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  header.style.boxShadow=y>20?"0 4px 20px rgba(0,0,0,.04)":"none";
  last=y;
});
