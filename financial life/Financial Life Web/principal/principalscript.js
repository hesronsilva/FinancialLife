var renda = document.getElementById('renda')//input 
var htmlDivida = document.getElementById('divida')//input 
var htmlDividaValor = document.getElementById('dividaValor')//input 
const divida = []
const dividaValor = []
var debt = document.getElementById('debt-list')//div que imprimirá valores ao longo do código


function AdicionarDívida() {
    if (renda.value == '') {
        alert('Escreva sua renda mensal!')
    } else if (htmlDivida.value == '' || htmlDividaValor.value == '') {
        alert('Descreva uma dívida e seu valor!')
    }//corrigi o erro, caso o usuário não entre com valor nenhum.
    else {
        let rendaFixa = Number(renda.value)//usei outra variavel pois a variável renda retornava um valor que não era do tipo namber.
        divida.push(htmlDivida.value)//adiciona a descrição da dívida no array divida
        dividaValor.push(Number(htmlDividaValor.value))//adiciona o valor da dívida no array divida
        let descDivida = htmlDivida.value//recebe a descrição da dívida digitada
        let descDividaValor = Number(htmlDividaValor.value)//recebe o valor da dívida digitada e o transforma em numero
        htmlDivida.value = ''
        htmlDividaValor.value = ''//os dois campos limpam o input para uma nova entrada de dados
        debt.innerHTML = `Você adicionou a dívida ${descDivida} com valor = R$ ${descDividaValor}`
        let dividaPorcent = ((descDividaValor * 100) / rendaFixa)
        debt.innerHTML += `<br>A divida ${descDivida} representa ${(dividaPorcent.toFixed(2))}% da sua renda.`//tofixed(valor) determina a quantidade de casas decimais.
    }
}

function CalculaDívida() {
    renda = Number(renda.value)
    var somaDividas = 0

    for (let i = 0; i < dividaValor.length; i++) {
        somaDividas += dividaValor[i] //soma os valores incrementados no array dividas, é similar a função sum de algumas linguagens
    }
    debt.innerHTML = ''

    let dividasTotalPorcent = ((somaDividas * 100) / renda)
    debt.innerHTML += `<br>O valor total das suas dívidas = R$ ${somaDividas}.`
    debt.innerHTML += `<br>O valor total das suas dívidas representa ${dividasTotalPorcent.toFixed(2)}% da sua renda!`

    let restante = (renda - somaDividas)

    if (dividasTotalPorcent > 55 && dividasTotalPorcent <= 100) {
        debt.innerHTML += `<br>Valor liquido já sem as dívidas fixas = R$ ${restante.toFixed(2)}`
        debt.innerHTML += `<br>Valor ideal para investimentos = R$ ${(restante * 0.10).toFixed(2)}`
        debt.innerHTML += `<br>Valor ideal para gastos futuros ou poupança emergencial = R$ ${(restante * 0.20).toFixed(2)}`
        debt.innerHTML += `<br><strong>OBS:</strong> Gastos para planos futuros como viagens de férias ou compras de itens como carro ou casa.`
        debt.innerHTML += `<br>Valor ideal para gastos imediatos como recompensa para diversão, lazer etc = R$ ${(restante * 0.70).toFixed(2)}`
        debt.innerHTML += `<br><strong>OBS:</strong> Lembrando que esse gasto é essencial para satisfação pessoal imediata, e deve ser gasto sem preocupações!!!`
        //debt.innerHTML +=`<br>Valor ideal para gastos com eventos, educação e cultura = R$ ${(restante*10)/100)} outra forma de escrever 10%` 
        debt.innerHTML += `<br>Valor ideal dos gastos com os ganhos atuais = R$ ${(renda * 0.55).toFixed(2)}`
        debt.innerHTML += `<br>Para manter seus gastos atuais, você tem de ter uma renda = R$ ${((somaDividas * 100) / 55).toFixed(2)}`
        debt.innerHTML += `<br>É necessário analisar e diminuir as dívidas fixas ou aumentar os ganhos mensais!`
    } else if (dividasTotalPorcent <= 55) {
        debt.innerHTML += `<br>Valor liquido já sem as dívidas fixas = R$ ${restante.toFixed(2)}`
        debt.innerHTML += `<br>Valor ideal para investimentos = R$ ${(restante * 0.10).toFixed(2)}`
        debt.innerHTML += `<br>Valor ideal para gastos futuros ou poupança emergencial = R$ ${(restante * 0.20).toFixed(2)}`
        debt.innerHTML += `<br><strong>OBS:</strong> Gastos para planos futuros como viagens de férias ou compras de itens como carro ou casa.`
        debt.innerHTML += `<br>Valor ideal para gastos imediatos como recompensa para diversão, lazer etc = R$ ${(restante * 0.70).toFixed(2)}`
        debt.innerHTML += `<br><strong>OBS:</strong> Lembrando que esse gasto é essencial para satisfação pessoal imediata, e deve ser gasto sem preocupações!!!`
        debt.innerHTML += `<br>Seus gastos fixos estão ideais!`
    } else {
        debt.innerHTML += `<br>Valor ideal dos gastos com os ganhos atuais = R$${(renda * 0.55).toFixed(2)}`
        debt.innerHTML += `<br>Para manter seus gastos atuais, você tem de ter uma renda = R$ ${((somaDividas * 100 / 55).toFixed(2))}`
        debt.innerHTML += `<br>Seus gastos ultrapassaram sua renda mensal!`
    }

}