const sum = require('./sum');

//recebe uma string e uma função de callback
test('somar dois números', () => {
    const resultado = sum(1,2)
    expect(resultado).toBe(3)
}) 