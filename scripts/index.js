const { Contract, ethers } = require('ethers');
const axios = require('axios');

async function getPlayerData(){

    const userContractAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F"
    const oracleContractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"

    const userAbi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_c1",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "getData",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_player_id",
              "type": "uint256"
            }
          ],
          "name": "requestPlayerData",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_player_id",
              "type": "uint256"
            }
          ],
          "name": "retreiveData",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]

    const oracleAbi = [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "player_id",
              "type": "uint256"
            }
          ],
          "name": "player",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "player_id",
              "type": "uint256"
            }
          ],
          "name": "getPlayerDetails",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "payForWeatherData",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "payer",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "playerData",
          "outputs": [
            {
              "internalType": "string",
              "name": "player_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Nationality",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "position_id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "player_id",
              "type": "uint256"
            }
          ],
          "name": "requestPlayer",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "player_id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_player_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_Nationality",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_position_id",
              "type": "uint256"
            }
          ],
          "name": "updatePlayerDetails",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]

    const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
    const signer = provider.getSigner()
    const userContract = new Contract(userContractAddress, userAbi, signer)
    const oracleContract = new Contract(oracleContractAddress, oracleAbi, signer)

    
  const transactionResponse = await userContract.requestPlayerData(172104, {value:ethers.utils.parseEther("2"), gasLimit : 300000})
  const data = await userContract.getData()

  const playerId = data

  try {
        Name = data
        const apiKey = '9IaILakxVouM15BTJFuXhv9lVVRWu1l4Cm6EK5Ycamn86NUbxR4wNaDel5TD';
        const PlayerAPI = `https://soccer.sportmonks.com/api/v2.0/players/${Name}?api_token=${apiKey}`;
        const response = await axios.get(PlayerAPI);
        const PlayerData = response.data;
        player_name_ = PlayerData.data.fullname;
        Nationality_ = PlayerData.data.nationality;
        position_id_ = PlayerData.data.position_id;
        
        const updateData = await oracleContract.updatePlayerDetails(Name,player_name_, Nationality_, position_id_)
        const finalData = await userContract.retreiveData(Name)
        console.log(finalData)

  } catch (e) {
    console.error(e);
}

}
getPlayerData()
