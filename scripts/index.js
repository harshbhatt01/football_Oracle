// const { Contract, ethers } = require('ethers');
// const axios = require('axios');

// async function getPlayerData(){

//     const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

//     const abi = [
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "player_id",
//             "type": "uint256"
//           }
//         ],
//         "name": "player",
//         "type": "event"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "player_id",
//             "type": "uint256"
//           }
//         ],
//         "name": "getStock",
//         "outputs": [
//           {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "name": "playerData",
//         "outputs": [
//           {
//             "internalType": "string",
//             "name": "player_name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "Nationality",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "position_id",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "height",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "weight",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "player_id",
//             "type": "uint256"
//           }
//         ],
//         "name": "requestPlayer",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "player_id",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "_player_name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "_Nationality",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_position_id",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_height",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_weight",
//             "type": "uint256"
//           }
//         ],
//         "name": "updateWeather",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       }
//     ]

//     const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
//     const signer = provider.getSigner()
//     const contract = new Contract(ContractAddress, abi, signer)

//     const getData = await contract.requestPlayer(172104)
//     const getDataRecipt = await getData.wait()

//     const Name = getDataRecipt.events[0];
//     console.log(Name);


//     var [player_name, Nationality, position_id, height, weight ] = await getPlayerDataOffChain(Name)
//     position_id = position_id.toString()
//     height = height.toString()
//     weight = weight.toString()
 
 
//     const updateData = await contract.updateWeather(Name,player_name, Nationality, position_id, height, weight)
//    // console.log(updateData);
//     const finalData = await contract.getStock(Name)
//     console.log(finalData)


// }

// async function getPlayerDataOffChain(Name){
//     try {
//         //const Name = "James Forrest";
//         const apiKey = '9IaILakxVouM15BTJFuXhv9lVVRWu1l4Cm6EK5Ycamn86NUbxR4wNaDel5TD';
//         const PlayerAPI = `https://soccer.sportmonks.com/api/v2.0/players/${Name}?api_token=${apiKey}`;
//        //const PlayerAPI =  "https://api.sportmonks.com/v3/football/players/search/JamesForrest?api_token=9IaILakxVouM15BTJFuXhv9lVVRWu1l4Cm6EK5Ycamn86NUbxR4wNaDel5TD";
//         const response = await axios.get(PlayerAPI);
//         const PlayerData = response.data;
//         console.log(PlayerData);
//         player_name_ = PlayerData.data.fullname;
//         Nationality_ = PlayerData.data.nationality;
//         position_id_ = PlayerData.data.position_id;
//         height_ = PlayerData.data.height;
//         weight_ = PlayerData.data.weight;
//         console.log(player_name_,Nationality_,position_id_,height_,weight_);
//         return [player_name_,Nationality_,position_id_,height_,weight_]
//       } catch (error) {
//         console.error(error);
//       }
// }
// getPlayerData()
