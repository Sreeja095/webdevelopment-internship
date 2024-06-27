const menuToggle=document.getElementById('mobile-menu');
const nav=document.querySelector('lav ul');
menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
});
