let turn="X";
let gameover=false;
let playcontainer=document.getElementById('main');
let resultcontainer=document.getElementById('end');
document.getElementById("xturn").style.backgroundColor="#ba3d3d";
    document.getElementById("xturn").innerText=turn;
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

const changeturn=()=>{
return turn === "X" ? "O" : "X";
}

const checkwin=()=>{
wins.some(win=>{
    return win.every(idx=>{
        console.log(boxtexts[idx]);
        return boxtexts[idx].innerText==turn;
    })
})
}

let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn = changeturn();
            if(checkwin()){
                console.log('you win');
            }
            if(!gameover){
            document.getElementById("xturn").innerText=turn;
            }
        }
})
})
