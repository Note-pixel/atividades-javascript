function executar() {
    let salario = parseFloat(document.getElementById("salario").value);
    let prestacao = parseFloat(document.getElementById("prestacao").value);
    let res = document.getElementById("resultado");

    if (salario > 2000.0) {
        if (prestacao <= (salario * 0.30)) res.innerHTML = "Emprestimo aprovado";
        else res.innerHTML = "Prestacao muito alta";
    } else {
        res.innerHTML = "Renda insuficiente";
    }
}