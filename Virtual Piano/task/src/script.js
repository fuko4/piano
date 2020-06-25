// document.addEventListener("keydown", function(event) {
//     if (event.code == "KeyA") {
//         console.log("The 'A' key is pressed.");
//         let audioA = new Audio("sounds/A.mp3");
//         audioA.play();
//     }else if (event.code == "KeyS") {
//         console.log("The 'S' key is pressed.");
//         let audioS = new Audio("sounds/S.mp3");
//         audioS.play();
//     }
//     else if (event.code == "KeyD") {
//         console.log("The 'D' key is pressed.");
//         let audioD = new Audio("sounds/D.mp3");
//         audioD.play();
//     }
//     else if (event.code == "KeyF") {
//         console.log("The 'F' key is pressed.");
//         let audioF = new Audio("sounds/F.mp3");
//         audioF.play();
//     }
//     else if (event.code == "KeyG") {
//         console.log("The 'G' key is pressed.");
//         let audioG = new Audio("sounds/G.mp3");
//         audioG.play();
//     }
//     else if (event.code == "KeyH") {
//         console.log("The 'H' key is pressed.");
//         let audioH = new Audio("sounds/H.mp3");
//         audioH.play();
//     }
//     else if (event.code == "KeyJ") {
//         console.log("The 'J' key is pressed.");
//         let audioJ = new Audio("sounds/J.mp3");
//         audioJ.play();
//     }
//     console.log(event.key);
// });

const key = {
    "KeyA": "sounds/A.mp3",
    "KeyS": "sounds/S.mp3",
    "KeyD": "sounds/D.mp3",
    "KeyF": "sounds/F.mp3",
    "KeyG": "sounds/G.mp3",
    "KeyH": "sounds/H.mp3",
    "KeyJ": "sounds/J.mp3",
    "KeyW": "sounds/W.mp3",
    "KeyE": "sounds/E.mp3",
    "KeyT": "sounds/T.mp3",
    "KeyY": "sounds/Y.mp3",
    "KeyU": "sounds/U.mp3"
};

document.addEventListener("keydown", function (event) {
if(Object.keys(key).includes(event.code)){
    new Audio(key[event.code]).play();
}
})