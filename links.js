let contacto = document.getElementsByClassName("contact");
let github = document.getElementsByClassName("github");
let linkedin = document.getElementsByClassName("linkedin");
let proyectos =  document.getElementsByClassName("proyectos");
let up = document.getElementById("up"); 
let loading = document.getElementsByClassName('loading')[0]

contacto[0].addEventListener('click',()=>{
    window.open('mailto:christiancastellano345@gmail.com');
})
github[0].addEventListener('click',()=>{
    window.open("https://github.com/ChristianC8");

})
linkedin[0].addEventListener('click',()=>{
    window.open("https://www.linkedin.com/in/tomas-c-193a9a246/");
})
proyectos[0].addEventListener('click',()=>{
    window.open("https://christianc8.github.io/proyect-class-e/");

})

up.addEventListener('click',()=>{
    window.scrollTo(0,0);

})

const myTimeout = setTimeout(()=>{
    loading.style.display = "none";
}, 16000);
