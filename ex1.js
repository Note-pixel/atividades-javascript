function executar() {
    let idade = parseInt(document.getElementById("idade").value);
    let res = document.getElementById("resultado");

    if (idade < 12) res.innerHTML = "Crianca";
    else if (idade <= 17) res.innerHTML = "Adolescente";
    else if (idade <= 59) res.innerHTML = "Adulto";
    else res.innerHTML = "Idoso";
}