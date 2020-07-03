'use strict';

const Wampy = require('wampy').Wampy;
const wampyCra = require('wampy-cra');
const w3cws = require('websocket').w3cwebsocket;
let ws;

/**
 * Manual authentication using signed message
 */
ws = new Wampy('ws://wamp.router.url', {
    ws: w3cws,
    realm: 'realm1',
    authid: 'joe',
    authmethods: ['wampcra'],
    onChallenge: (method, info) => {
        console.log('Requested challenge with ', method, info);
        return wampyCra.sign('joe secret key or password', info.challenge);
    },
    onConnect: () => {
        console.log('Connected to Router!');
    }
});

/**
 * Promise-based manual authentication using signed message
 */
ws = new Wampy('ws://wamp.router.url', {
    ws: w3cws,
    realm: 'realm1',
    authid: 'micky',
    authmethods: ['wampcra'],
    onChallenge: (method, info) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Requested challenge with ', method, info);
                resolve(wampyCra.sign('micky secret key or password', info.challenge));
            }, 2000);
        });
    },
    onConnect: () => {
        console.log('Connected to Router!');
    }
});

/**
 * Manual authentication using salted key and pbkdf2 scheme
 */
ws = new Wampy('ws://wamp.router.url', {
    ws: w3cws,
    realm: 'realm1',
    authid: 'peter',
    authmethods: ['wampcra'],
    onChallenge: (method, info) => {
        const iterations = 100;
        const keylen = 16;
        const salt = 'password salt for user peter';

        console.log('Requested challenge with ', method, info);
        return wampyCra.sign(wampyCra.derive_key('peter secret key or password', salt, iterations, keylen), info.challenge);
    },
    onConnect: () => {
        console.log('Connected to Router!');
    }
});

/**
 * Automatic method detection authentication
 */
ws = new Wampy('ws://wamp.router.url', {
    ws: w3cws,
    realm: 'realm1',
    authid: 'patrik',
    authmethods: ['wampcra'],
    onChallenge: wampyCra.auto('patrik secret key or password'),
    onConnect: () => {
        console.log('Connected to Router!');
    }
});

/**
 * Promise-based automatic method detection authentication
 */
ws = new Wampy('ws://wamp.router.url', {
    ws: w3cws,
    realm: 'realm1',
    authid: 'vanya',
    authmethods: ['wampcra'],
    onChallenge: (method, info) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Requested challenge with ', method, info);
                resolve(wampyCra.auto('vanya secret key or password')(method, info));
            }, 2000);
        });
    },
    onConnect: () => {
        console.log('Connected to Router!');
    }
});
