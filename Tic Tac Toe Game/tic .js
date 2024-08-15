let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {     //player O
            box.innerText = "0";
            turn0 = false;
        } else {         //player X
            box.innerText = "X";
            turn0 = true;
        } 
        box.disabled = true;

        checkWinner();
    });
});



const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = (`Congratulations! ${winner} is winner`);
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
      for (let pattern of winPatterns) {
        let pos1val1 = boxes[pattern[0]].innerText;
        let pos2val2 = boxes[pattern[1]].innerText;
        let pos3val3 = boxes[pattern[2]].innerText;
       
        if (pos1val1 != "" && pos2val2 !=  "" && pos3val3 != "") {
            if (pos1val1 === pos2val2 && pos2val2 === pos3val3) {
                console.log("winner", pos1val1);
                showWinner(pos1val1);
            }
        }
      }
}

resetBtn.addEventListener("click", resetGame)