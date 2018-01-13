let gameStart = false;

$(document).ready(function () {
    beginGame();
});

function beginGame() {
    $('.begin').click(function () {
        if (!(gameStart)) {
            gameStart = true;
            this.innerHTML = "Reiniciar!";
        } else {
            if (confirm("Deseja reiniciar o jogo?")) {
                this.innerHTML = "Começar!";
                gameStart = false;
                prepareCards();
            }
        }
    });
}