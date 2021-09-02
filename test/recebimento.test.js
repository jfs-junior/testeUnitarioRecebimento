const {recebimento} = require('../src/recebimento.js')

describe('Testando o pagamento com a data atrasada', () => {
    test('valor=100, diaPagamento=10, diaVencimento=5', () => {
        expect(recebimento(100,10,5)).toBe(107.5)
    })
})

describe('Testando o pagametno em dia', () => {
    test('valor=100, diaPagamento=5, diaVencimento=5', () => {
        expect(recebimento(100,5,5)).toBe(100)
    })
})

describe('Testando o pagamento antes da data', () => {
    test('valor=100, diaPagamento=3, diaVencimento=5', () => {
        expect(recebimento(100,3,5)).toBe(100)
    })
})