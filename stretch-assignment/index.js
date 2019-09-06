let boxes = document.getElementsByClassName("block");



let canMoveRight = false;
for (let box of boxes) {
    box.addEventListener("click", event => {
        event.target.classList.add("anim");

        document.querySelector(".blocks").insertBefore(event.target, document.querySelector(".blocks").children[0]).focus();
    });
 
    box.addEventListener("mousedown", () => {
        canMoveRight = true;
        if (canMoveRight){
            interval = setInterval(() => {
                let margin = window.getComputedStyle(box).marginLeft;
                let marginInt = Number(margin.substring(0, margin.length - 2));
                if ((document.body.offsetWidth / 2) < marginInt ) clearInterval(interval);;
                box.style.marginLeft = `${marginInt += 10}px`;
            }, 50);
        }         
    }); 

    box.addEventListener("mouseup", (e) => {
            canMoveRight = false;
            clearInterval(interval);
            e.target.style.marginLeft = "10px";
            console.log(canMoveRight, "stop")
    });
}

