let gameStart = false;
let time;

$(document).ready(function () {
    beginGame();
});

function beginGame() {
    $('.begin').click(function () {
        if (!(gameStart)) {
           $('.card').toggleClass('flipped');
            let wait = setInterval(function () {
                $('.card').toggleClass('flipped');
                gameStart = true;
                showChronometer();
                $('.begin').html("Reiniciar!");
                clearInterval(wait);
            }, 3000);
            this.innerHTML = "Memorize!";
        } else {
            if (confirm("Deseja reiniciar o jogo?")) {
                stopChronometer();
                this.innerHTML = "Começar!";
                gameStart = false;
                prepareCards();
            }
        }
    });
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