const GRPCError = require('grpc-error')

const error = new GRPCError('Boom', { status_code: 'INVALID_TOKEN' )
console.log(err instanceof Error) // true
console.log(err.message) // 'Boom'
console.log(err.metadata instanceof grpc.Metadata) // true
console.log(err.metadata.getMap()) // { status_code: 'INVALID_TOKEN' }