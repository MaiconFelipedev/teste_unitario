const {sum} = require('./sum');

//recebe uma string e uma função de callback
test('somar dois números', () => {
    const resultado = sum(1,2)
    expect(resultado).toBe(3)
}) 


test('deve retornar erro ao somar valores não numéricos', () => {
    const resultado = sum(1,'a')
    expect(resultado).toBe("Digite valores numéricos")
}) 