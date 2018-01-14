let gameStart = false;
let time;

$(document).ready(function () {
    $('.begin').click(function () {
        beginGame();
    });
});

let count3seconds = 0;
function beginGame() {
    if (!(gameStart) && (count3seconds == 0)) {
        count3seconds = 1;
        $('.card').toggleClass('flipped');
        let wait = setInterval(function () {
            $('.card').toggleClass('flipped');
            gameStart = true;
            showChronometer();
            $('.begin').html("Reiniciar!");
            clearInterval(wait);
            count3seconds = 0;
        }, 3000);
        this.innerHTML = "Memorize!";
    } else if (gameStart && count3seconds == 0){
        if (confirm("Deseja reiniciar o jogo?")) {
            stopChronometer();
            this.innerHTML = "Começar!";
            gameStart = false;
            prepareCards();
        }
    }
}

function showChronometer() {
    time = setInterval(chronometer, 10);
}

function stopChronometer() {
    clearInterval(time);
    mil = 0;
    sec = 0;
    min = 0;
    $('.chronometer').html(`00:00:00`);
}