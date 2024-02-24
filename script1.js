const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

bars.onclick = () => {
  bars.classList.toggle('fa-bars');
  navbar.classlist.toggle('open');
}

// const bars = document.querySelector('#menu-icon');


// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu').onclick = () =>{
//     navbar.classList.toggle('active');
// }

