let isAdm = false;

function callLogin() {
    $('#login-adm').submit(function (event) {
        $.post('/Admin/LoginAdmin',
            {
                name: $('#username').val(),
                password: $('#password').val()
            }
            , function (wasAuthenticated) {
                verifyLogin(wasAuthenticated);
            });
        event.preventDefault();
    });
}

function deletePlayer(player) {
    if (confirm(`Tem certeza que quer excluir`)) {
        $.post('/Ranking/DeletePlayer',
            {
                id: player,
            }
            , function (wasDeleted) {
                if (wasDeleted) {
                    $('#ranking').html(`<tr>
                        <td></td>
                        <td><img src="../img/loading.gif" /></td>
                        <td></td>
                    </tr>`);
                    getRank();
                }
            });
    }
}

function verifyLogin(wasAuthenticated) {
    if (wasAuthenticated == "True") {
        isAdm = true;
        $('#close').trigger('click');
        getRank();
    } else {
        alert("Usuário ou senha inválido(s)");
    }
}