const convert = require('../utils/converter')

describe('Converter', () => {
  describe('Main roman numerals', () => {
    it.each([
      [1, 'I'],
      [5, 'V'],
      [10, 'X'],
      [50, 'L'],
      [100, 'C'],
      [500, 'D'],
      [1000, 'M'],
    ])('when given %i returns %s', (a, expected) => {
      expect(convert(a)).toEqual(expected)
    })
  })

  describe('Addition cases', () => {
    it.each([
      [2, 'II'],
      [6, 'VI'],
      [7, 'VII'],
      [8, 'VIII'],
      [11, 'XI'],
      [12, 'XII'],
      [13, 'XIII'],
      [15, 'XV'],
      [16, 'XVI'],
      [17, 'XVII'],
      [18, 'XVIII'],
      [20, 'XX'],
      [32, 'XXXII'],
      [42, 'XLII'],
      [52, 'LII'],
      [60, 'LX'],
      [62, 'LXII'],
      [70, 'LXX'],
      [72, 'LXXII'],
      [80, 'LXXX'],
      [82, 'LXXXII'],
      [92, 'XCII'],
    ])('when given %i returns %s', (a, expected) => {
      expect(convert(a)).toEqual(expected)
    })
  })

  describe('Substraction cases', () => {
    it.each([
      [4, 'IV'],
      [9, 'IX'],
      [14, 'XIV'],
      [19, 'XIX'],
      [24, 'XXIV'],
      [29, 'XXIX'],
      [34, 'XXXIV'],
      [39, 'XXXIX'],
      [40, 'XL'],
      [44, 'XLIV'],
      [49, 'XLIX'],
      [90, 'XC'],
      [94, 'XCIV'],
      [99, 'XCIX'],
    ])('when given %i returns %s', (a, expected) => {
      expect(convert(a)).toEqual(expected)
    })
  })

  describe('Exceptions rules', () => {
    it.each([
      [3, 'III'],
      [4, 'IV'],
      [30, 'XXX'],
      [40, 'XL'],
      [80, 'LXXX'],
      [90, 'XC'],
      [300, 'CCC'],
      [400, 'CD'],
      [3000, 'MMM'],
      //   [4000, 'MMMM'],
    ])('when given %i returns %s', (a, expected) => {
      expect(convert(a)).toEqual(expected)
    })
  })
})
