// Your code goes here

const container = document.querySelector('*');
const header = document.querySelector('header');
const nav = document.querySelectorAll('nav a');


//Double click header to toggle darkmode

header.addEventListener('dblclick', e  =>  {
    container.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.forEach(a => a.classList.toggle('dark'));
});


