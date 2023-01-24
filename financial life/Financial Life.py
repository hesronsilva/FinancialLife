renda = float(input('Escreva o valor da sua renda mensal R$'))
dividasDescricao = []
dividasValores = []
fimDivida = str('1')

while fimDivida == '1':
    divida = str(input('Descreva uma dívida: '))
    dividaValor = float(input('Escreva o valor da dívida {} R$'.format(divida)))
    dividaPorcent = ((dividaValor*100)/renda) #calcula quantos porcento cada divída representa da renda mensal
    dividasDescricao.append('A dívida {} representa {:.2f}% da sua renda!'.format(divida,dividaPorcent))
    dividasValores.append(float(dividaValor))
    fimDivida = str(input('Se deseja inserir mais uma dívida digite 1 se não digite 2: '))

else:
    print('-=-'*20)
    dividasTotalPorcent = ((sum(dividasValores)*100)/renda)
    print(dividasDescricao)
    print('O valor total das suas dívidas = R${:.2f}'.format(sum(dividasValores))) #valor total dos gastos fixos
    print('O valor total das suas dívidas representa {:.2f}% da sua renda!'.format(dividasTotalPorcent)) 
    #a principio os proximos gastos a seguir são a partir do restante da renda, sendo modificado assim que tiver um aumento na renda
    restante = (renda - (sum(dividasValores)))
        
    if dividasTotalPorcent < 100 and dividasTotalPorcent > 55:
        print('Valor liquido sem os gastos fixos = R${:.2f}'.format(restante))
        print('Valor ideal para investimentos = R${:.2f}'.format(restante*0.10))
        print('Valor ideal para gastos futuros ou poupança emergencial = R${:.2f}'.format(restante*0.20),'\nOBS: Gastos para planos futuros como viagens de férias, compras de itens como carro ou casa.')
        print('Valor ideal para gastos imediatos como recompensa para diversão, lazer etc = R${:.2f}'.format(restante*0.70),'\nOBS: Lembrando que esse gasto é essencial para satisfação pessoal imediata, e deve ser gasto sem preocupações!!!')
        #print('Valor ideal para gastos com eventos, educação e cultura = R${:.2f}'.format((restante*10)/100))
        print('Valor ideal dos gastos com os ganhos atuais = R${:.2f}'.format(renda*0.55))
        print('Para manter seus gastos atuais, você tem de ter uma renda = R${:.2f}'.format((sum(dividasValores)*100)/55))
        print('É necessário analisar e diminuir as dívidas fixas ou aumentar os ganhos mensais!')
    
    elif dividasTotalPorcent < 55:
        print('Valor liquido sem os gastos fixos = R${:.2f}'.format(restante))
        print('Valor ideal para investimentos = R${:.2f}'.format(restante*0.10))
        print('Valor ideal para gastos futuros ou poupança emergencial = R${:.2f}'.format(restante*0.20),'\nOBS: Gastos para planos futuros como viagens de férias, compras de itens como carro ou casa.')
        print('Valor ideal para gastos imediatos como recompensa para diversão, lazer, etc = R${:.2f}'.format(restante*0.70),'\nOBS: Lembrando que esse gasto é essencial para satisfação pessoal imediata, e deve ser gasto sem preocupações!!!')
        #print('Valor ideal para gastos com eventos, educação e cultura = R${:.2f}'.format((restante*10)/100))
        print('Seus gastos fixos estão ideais!')
    
    elif dividasTotalPorcent > 100:
        print('Valor ideal dos gastos com os ganhos atuais = R${:.2f}'.format(renda*0.55))
        print('Para manter seus gastos atuais, você tem de ter uma renda = R${:.2f}'.format((sum(dividasValores)*100)/55))
        print('Seus gastos ultrapassaram sua renda mensal!')