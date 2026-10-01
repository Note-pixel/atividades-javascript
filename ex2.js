function executar() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let media = (n1 + n2) / 2;
    let res = document.getElementById("resultado");
    let texto = "";

    if (media >= 7) {
        texto = "Aprovado";
        if (media === 10) texto += "<br>Parabens! Desempenho excelente!";
    } else if (media >= 5) {
        texto = "Recuperacao";
    } else {
        texto = "Reprovado";
    }
    res.innerHTML = texto;
}