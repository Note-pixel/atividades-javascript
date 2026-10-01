function executar() {
    let idade = parseInt(document.getElementById("idade").value);
    let res = document.getElementById("resultado");

    if (idade >= 18) {
        let senha = prompt("Digite a senha (1234):");
        if (senha === "1234") res.innerHTML = "Acesso autorizado";
        else res.innerHTML = "Senha incorreta";
    } else {
        res.innerHTML = "Acesso nao permitido";
    }
}