const calculatrice = require('./calculatrice');

test('addition', () => {
    expect(calculatrice (1, 1,'+')).toBe(2);
    expect(calculatrice (-1, 1,'+')).toBe(0);
    expect(calculatrice (-1, -1,'+')).toBe(-2);
    expect(calculatrice (0, 0,'+')).toBe(0);
    expect(calculatrice (1.5, 2.5,'+')).toBe(4.0);
});

test('soustraction', () => {
    expect(calculatrice (1, 1,'-')).toBe(0);
    expect(calculatrice (-1, 1,'-')).toBe(-2);
    expect(calculatrice (-1, -1,'-')).toBe(0);
    expect(calculatrice (0, 0,'-')).toBe(0);
    expect(calculatrice (2.5, 1.5,'-')).toBe(1.0);
});

test('multiplication', () => {
    expect(calculatrice (1, 1,'*')).toBe(1);
    expect(calculatrice (-1, 1,'*')).toBe(-1);
    expect(calculatrice (-1, -1,'*')).toBe(1);
    expect(calculatrice (0, 0,'*')).toBe(0);
    expect(calculatrice (1.5, 2.0,'*')).toBe(3.0);
});

test('division', () => {
    expect(calculatrice (1, 1,'/')).toBe(1);
    expect(calculatrice (-1, 1,'/')).toBe(-1);
    expect(calculatrice (-1, -1,'/')).toBe(1);
    expect(calculatrice (1.5, 0.5,'/')).toBe(3);
    expect(calculatrice (10, 3,'/')).toBe(3.33);
    expect(calculatrice (1, 0,'/')).toBe(null);
});
