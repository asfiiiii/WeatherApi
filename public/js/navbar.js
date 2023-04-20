const navbar =  document.querySelector(".navbar");
const btn1 =  document.querySelector(".toggle");

btn1.addEventListener('click',()=>
{
    navbar.classList.toggle('active');
})
