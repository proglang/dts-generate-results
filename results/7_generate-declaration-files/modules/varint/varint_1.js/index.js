var varint = require('varint')

var bytes = varint.encode(300) // === [0xAC, 0x02]
varint.decode(bytes) // 300
varint.decode.bytes // 2 (the last decode() call required 2 bytes)
