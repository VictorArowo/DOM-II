let boxes = document.getElementsByClassName("block");

let canMoveRight = false;
for (let box of boxes) {
    box.addEventListener("click", () => box.style.order--);

    box.addEventListener("mousedown", () => {
        canMoveRight = true;         
        console.log(canMoveRight);
        setTimeout(function() {
        while(canMoveRight) 
        {
            let margin = window.getComputedStyle(box).marginLeft;
            let marginInt = Number(margin.substring(0, margin.length - 2));
            console.log(marginInt);
            box.style.marginLeft = `${marginInt += 0.001}px`;
            console.log(box.style.marginLeft);
        }
    }, 1000);
    }); 

    box.addEventListener("mouseup", () => canMoveRight = false);
}


