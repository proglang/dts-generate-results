const { when, resetAllWhenMocks } = require('jest-when')
const fn = jest.fn()

when(fn).expectCalledWith(1).mockReturnValueOnce('x')

expect(fn(1)).toEqual('x')

resetAllWhenMocks()

when(fn).expectCalledWith(1).mockReturnValueOnce('z')

expect(fn(1)).toEqual('z')
