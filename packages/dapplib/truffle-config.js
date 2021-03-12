require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle misery uncle install clog blue suggest'; 
let testAccounts = [
"0xbfb69b67342584739c74decd7dca529ef622b16e18f5a0413673ee975f0fe914",
"0x531f2627ae85bef91fa1e34a7c2bec51c2c53815847de5a40a2069caffd20bbd",
"0x80c2202a93e46855755f68e87784c250bdb9503be801fc8236360131530fedc5",
"0x44f220b2375ba22b39a48e50f77a6954dede2749f71ffa4b49e823fa4d68ef4c",
"0x40d49ce421c1d980e2e68b46fc56ea06b26c8928810e5e049fda6b4341e0ee29",
"0xccbd1ff002313734771c8a78928fec645e73dfc5ac5432fb36e7015d4633d169",
"0x508c0d2f68b9826307db65b218da4ba595f3284238b5edc3b4e1d96e1a34aa24",
"0xff00a1b443a02acaa5f9fee9bf842a49cf66b6e78b2a229e2d81b22b09c0443a",
"0xfc161d3ee7524afd04ea099a084adbc3b592fff4f35986839f701a24c35f4704",
"0x9ab09f2214a55d72405174aff087ed7acad7bd8bdb3b141cc5c8971b77c54160"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
