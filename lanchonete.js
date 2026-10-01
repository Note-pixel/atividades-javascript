let total = 0.0;
let qtdProdutos = 0;

function entrarNoSistema() {
    let senha;
    
    do {
        senha = prompt("Digite a senha (1234):");
        if (senha !== "1234" && senha !== null) {
            alert("Senha incorreta!");
        }
    } while (senha !== "1234" && senha !== null);

    if (senha === "1234") {
        document.getElementById("telaLogin").classList.add("escondido");
        document.getElementById("telaMenu").classList.remove("escondido");
    }
}

function adicionarProduto() {
    let opcao = parseInt(document.getElementById("codigoProduto").value);
    let spanErro = document.getElementById("mensagemErro");

    spanErro.innerHTML = "";

    if (opcao < 1 || opcao > 4 || isNaN(opcao)) {
        spanErro.innerHTML = "Opção invalida! Escolha de 1 a 4.";
        return; 
    }

    switch (opcao) {
        case 1:
            total += 15.0;
            alert("Hamburguer adicionado!");
            break;
        case 2:
            total += 20.0;
            alert("Pizza adicionada!");
            break;
        case 3:
            total += 6.0;
            alert("Refrigerante adicionado!");
            break;
        case 4:
            total += 10.0;
            alert("Batata Frita adicionada!");
            break;
    }
    
    qtdProdutos++; 
    document.getElementById("codigoProduto").value = ""; 
}

function finalizarPedido() {
    document.getElementById("telaMenu").classList.add("escondido");
    document.getElementById("telaRecibo").classList.remove("escondido");

    let textoRecibo = "";

    for (let i = 1; i <= qtdProdutos; i++) {
        textoRecibo += `Produto ${i} registrado<br>`;
    }

    let desconto = (total >= 50.0) ? (total * 0.10) : 0.0;
    let valorFinal = total - desconto;

    textoRecibo += `<br>Subtotal: R$ ${total.toFixed(2)}<br>`;
    textoRecibo += `Desconto: R$ ${desconto.toFixed(2)}<br>`;
    textoRecibo += `<strong>Total a pagar: R$ ${valorFinal.toFixed(2)}</strong><br>`;

    document.getElementById("detalhesRecibo").innerHTML = textoRecibo;
}