// Your code goes here

const container = document.querySelector('*');
const header = document.querySelector('header');
const nav = document.querySelectorAll('nav a');
const text = document.querySelector(".intro p");
const intro = document.querySelector(".intro");


//Double click header to toggle darkmode

header.addEventListener('dblclick', e  =>  {
    container.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.forEach(a => a.classList.toggle('dark'));
});


//Increase scale of nav items on mouse enter

nav.forEach(a => a.addEventListener("mouseover", (e) => {
    e.target.classList.add("scale");
}));


//Reset scale of nav items on mouse leave

nav.forEach(a => a.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("scale");
}));

//Change opacity on scroll

window.addEventListener("scroll", e => {
     header.style.opacity = 0.1
})

//Alert on load
window.addEventListener("load", e => {
    alert("Loading done");
})

//Alert on resize
window.addEventListener("resize", e => {
    alert("Window was resized");
})

//Select
text.addEventListener("select", e => {
    console.log(e.target.value.substring(event.target.selectionStart, event.target.selectionEnd));
})

//Alerts on right click and disables default action
window.addEventListener("contextmenu", e => {
    alert("You right clicked");
    e.preventDefault();
})

//Logs key presses
window.addEventListener('keydown', e => {
    console.log(e.code);
});

//Logs copied text
container.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString());
    console.log(selection.toString());
});


//Prevent default
nav.forEach(a => () => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

//Stop propagation
intro.addEventListener("click", event => {
    console.log("parent was clicked");
})

text.addEventListener("click", event => {
    event.stopPropagation();
    console.log("child was clicked");
})

//Stretch Problem

// TweenMax.to(".box", 3, {x:"300px"}); => Shifts element by 300 px on x axis in 3 milliseconds.


// moveBox = (selector, duration, distance) =>{
//     let element = document.querySelector(selector);
//     let style =  window.getComputedStyle(element);
//     let marginString = style.marginLeft;
//     let initialMargin = Number(marginString.substring(0, marginString.length - 2));
//     let currentMargin = Number(initialMargin);
//     let interval = setInterval(() => {
//         currentMargin += distance / (duration * 1000);
//         element.style.marginLeft = `${currentMargin}px`;
//         //  console.log(element.style.marginLeft);
//         if (currentMargin >= (initialMargin + distance)) clearInterval(interval);

//     }, 1);
// } 

// moveBox(".content-destination", 3, 300);















