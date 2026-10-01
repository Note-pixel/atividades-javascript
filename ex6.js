function executar() {
    let pontos = parseInt(document.getElementById("pontos").value);
    let res = document.getElementById("resultado");

    if (pontos < 100) res.innerHTML = "Iniciante";
    else if (pontos <= 499) res.innerHTML = "Intermediario";
    else if (pontos <= 999) res.innerHTML = "Avancado";
    else {
        if (pontos >= 2000) res.innerHTML = "Mestre Lendario";
        else res.innerHTML = "Mestre";
    }
}