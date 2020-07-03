const { when, verifyAllWhenMocksCalled } = require('jest-when')
const fn = jest.fn()

when(fn).expectCalledWith(1).mockReturnValueOnce('x')

expect(fn(1)).toEqual('x')

verifyAllWhenMocksCalled() // passes
