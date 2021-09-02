function recebimento(valorParcela, diaPagamento, diaVencimento) {

    if(diaPagamento > diaVencimento ) {
        var diaAtraso = diaPagamento - diaVencimento

        return (diaAtraso*1.50)+valorParcela
    } else {
        return valorParcela
    }

}

module.exports = { recebimento }