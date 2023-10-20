const {div} = require('./calc');

test('Divisão que lança exceção', () => {
    expect(div(10,0)).toBe('Digite valores numéricos')
})