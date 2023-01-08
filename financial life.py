renda = float(input('Escreva o valor da sua renda mensal '))
dividasDescricao = []
dividasValores = []
fimDivida = 1

while fimDivida == 1:
    divida = str(input('Descreva uma dívida: '))
    dividaValor = float(input('Escreva o valor da dívida {}: '.format(divida)))
    dividaPorcent = ((dividaValor*100)/renda)
    dividasDescricao.append('A dívida {} representa {:.2f}% da sua renda!'.format(divida,dividaPorcent))
    dividasValores.append(float(dividaValor))
    fimDivida = int(input('Se deseja inserir mais uma dívida digite 1 se não digite 2: '))
else:
    dividasTotalPorcent = ((sum(dividasValores)*100)/renda)
    print(dividasDescricao)
    print('O valor total das suas dívidas é {:.2f}'.format(sum(dividasValores)))
    print('O valor total das suas dívidas representa {:.2f}% da sua renda!'.format(dividasTotalPorcent))