

function AdicionarDívida() {
    var renda = document.getElementById("renda");
    var divida = document.getElementById("divida");
    var dividaValor = document.getElementById("dividaValor");
    var dividas = [];
    var dividaValores = [];

    renda = renda.value
    dividas.push(divida.value)
    dividaValores.push(dividaValor.value)

    alert(`Divida ${dividas} tem valores ${dividaValores}`)
    document.getElementById("impressao").innerHTML = `Divida ${dividas} tem valores ${dividaValores}`
}

