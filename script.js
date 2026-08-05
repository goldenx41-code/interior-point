document.addEventListener("DOMContentLoaded", function () {

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",function(){

window.open(this.src,"_blank");

});

});

});
function showGallery(id){

const galleries=document.querySelectorAll(".gallery-content");

galleries.forEach(function(gallery){
gallery.style.display="none";
});

const selected=document.getElementById(id);

if(selected){
selected.style.display="block";
}

}

window.onload=function(){

showGallery("pvc");

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919026775153";

whatsapp.className="floating-whatsapp";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

};
