let gameStart = false;

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
                $('.begin').html("Reiniciar!");
                clearInterval(wait);
            }, 3000);
            this.innerHTML = "Memorize!";
        } else {
            if (confirm("Deseja reiniciar o jogo?")) {
                this.innerHTML = "Começar!";
                gameStart = false;
                prepareCards();
            }
        }
    });
}