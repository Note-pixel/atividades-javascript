function executar() {
    let num = parseInt(document.getElementById("numero").value);
    let res = document.getElementById("resultado");

    if (num > 0) {
        if (num % 2 === 0) res.innerHTML = "O numero e positivo e par.";
        else res.innerHTML = "O numero e positivo e impar.";
    } else if (num < 0) {
        res.innerHTML = "O numero e negativo.";
    } else {
        res.innerHTML = "O numero e zero.";
    }
}