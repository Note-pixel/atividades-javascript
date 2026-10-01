function executar() {
    let valor = parseFloat(document.getElementById("valor").value);
    let tipo = parseInt(document.getElementById("tipo").value);
    let res = document.getElementById("resultado");

    if (valor >= 100.0) {
        if (tipo === 2) res.innerHTML = "Desconto de 20%. Total: R$ " + (valor * 0.80).toFixed(2);
        else res.innerHTML = "Desconto de 10%. Total: R$ " + (valor * 0.90).toFixed(2);
    } else {
        res.innerHTML = "Sem desconto. Total: R$ " + valor.toFixed(2);
    }
}