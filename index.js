let turn = "X";
let boxcontent = document.querySelector(".boxcontent");
let win = false;
const changeturn = () => {
    return turn === "X" ? "O" : "X";
}
const checkwin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    let textcontent = document.getElementsByClassName("textcontent");
    Array.from(wins).forEach(e => {
        if ((textcontent[e[0]].innerText === textcontent[e[1]].innerText) && (textcontent[e[2]].innerText === textcontent[e[1]].innerText) && (textcontent[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = `${textcontent[e[0]].innerText} win`;
            win = true;
        }
    });
}
const gamestart = () => {
    boxcontent.addEventListener("click", (e) => {
        let textcontent = e.target.querySelector(".textcontent");
        if (textcontent.innerText == "") {
            textcontent.innerText = turn;
            turn = changeturn();
            checkwin();
            if (win === false) {
                let info = document.querySelector(".info").innerText = `${turn} turn`;
            }
        }
    });
}
document.querySelector(".btn").addEventListener("click", () => {
    let span = document.querySelectorAll(".textcontent");
    span.forEach(e => {
        e.innerText = "";
        turn = "X";
        win = false;
        document.querySelector(".info").innerText = `${turn} turn`;
        gamestart();
    })
})

gamestart();
