function executar() {
    let idade = parseInt(document.getElementById("idade").value);
    let acompanhado = parseInt(document.getElementById("acompanhado").value);
    let estudante = parseInt(document.getElementById("estudante").value);
    let res = document.getElementById("resultado");

    if (idade < 18) {
        if (acompanhado === 0) {
            res.innerHTML = "Entrada nao permitida.";
            return;
        }
    }

    let preco;
    if (idade < 12) {
        preco = 10.0;
    } else {
        if (estudante === 1) preco = 15.0;
        else preco = 30.0;
    }

    let tipoIngresso = (preco < 30.0) ? "Meia-entrada" : "Entrada inteira";
    res.innerHTML = "Entrada permitida<br>Tipo: " + tipoIngresso + "<br>Preco: R$ " + preco.toFixed(2);
}