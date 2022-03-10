require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot chef random machine hole coral light army gauge'; 
let testAccounts = [
"0x51900d58209ad294485193e798fce4146d82778de880a24c3e9327e2a0035a6a",
"0x755bc7645db074e04e232d71756331f2386976c4725530f31f358ee9c0097ccc",
"0x6875a5e5e89947b5909abfefb674e532ec7da1841fdde0c2cda585e03fe9578b",
"0x98d9e34c94a88007889513c10948912d0994d0b50162a0b0da31e496998f6c06",
"0x93204b185b0eb999c80d8c181bd85b7c48b32561b4d72c76d892ad90bab8e322",
"0xeee87785c295c902ee8526d91381a75febc7da61175de13b410ed84c358ef9b9",
"0x42e959f78bd5b6ca7aa979cf5bf56709f505588fd059636c5e789f6fda088c6a",
"0xb2688c49041edcdb1bc3c4976de9e83310251e6e568053b84f5c037604be0534",
"0x32d1e2ea9f468cc04b4db55f0272fb3646ec2f8cff43693489e129ea071e6d8a",
"0xf8219b500909bbcf6699056ed7518c091f3d3001bc46c0bd12f5d97fbfe12129"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


