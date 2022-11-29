const player1 = {
    score: 0,
    button: document.querySelector('#play1'),
    display: document.querySelector('#player1')
}

const player2 = {
    score: 0,
    button: document.querySelector('#play2'),
    display: document.querySelector('#player2')
}


const resetBtn = document.querySelector('#reset');
const selectPlay = document.querySelector('#selectOp');

let isGameOver = false;
let winningScore = 3;



function uptadeScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function(){
    uptadeScore(player1, player2);
});

player2.button.addEventListener('click', function(){
    uptadeScore(player2, player1);
});

resetBtn.addEventListener('click', reset);

selectPlay.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

function reset() {
    isGameOver = false;
    for(let p of[player1,player2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }



    // player1.score = 0;
    // player2.score = 0;
    // player1.display.textContent = 0;
    // player2.display.textContent = 0;
    // player1.display.classList.remove('has-text-success', 'has-text-danger');
    // player2.display.classList.remove('has-text-success', 'has-text-danger');
    // player1.button.disabled = false;
    // player2.button.disabled = false;
}




