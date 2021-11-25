// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require("web3")
const { interface, bytecode } = require( "./compile" )

const provider = new HDWalletProvider(
  "science venue decorate hamster brush expire like session energy level hobby laundry",
  "https://rinkeby.infura.io/v3/52e65f2369ea4194a3883df1d42383c5"
)

const web3 = new Web3(provider)
