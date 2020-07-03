const openpgp = require('openpgp') // use as CommonJS, AMD, ES6 module or via window.openpgp

await openpgp.initWorker({ path:'openpgp.worker.js' }) // set the relative web worker path

// put keys in backtick (``) to avoid errors caused by spaces or tabs
const pubkey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
...
-----END PGP PUBLIC KEY BLOCK-----`
const privkey = `-----BEGIN PGP PRIVATE KEY BLOCK-----
...
-----END PGP PRIVATE KEY BLOCK-----` //encrypted private key
const passphrase = `yourPassphrase` //what the privKey is encrypted with

const encryptDecryptFunction = async() => {
    const privKeyObj = (await openpgp.key.readArmored(privkey)).keys[0]
    await privKeyObj.decrypt(passphrase)

    const options = {
        message: openpgp.message.fromText('Hello, World!'),       // input as Message object
        publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
        privateKeys: [privKeyObj]                                 // for signing (optional)
    }

    openpgp.encrypt(options).then(ciphertext => {
        encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        return encrypted
    })
    .then(async encrypted => {
        const options = {
            message: await openpgp.message.readArmored(encrypted),    // parse armored message
            publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
            privateKeys: [privKeyObj]                                 // for decryption
        }

        openpgp.decrypt(options).then(plaintext => {
            console.log(plaintext.data)
            return plaintext.data // 'Hello, World!'
        })

    })
}

encryptDecryptFunction()
