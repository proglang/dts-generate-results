const GRPCError = require('grpc-error')
const grpc require('grpc')
const error = new GRPCError('Boom', grpc.status.INVALID_ARGUMENT)
