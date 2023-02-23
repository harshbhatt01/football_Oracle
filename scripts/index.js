const { Contract, ethers } = require('ethers');
const axios = require('axios');

const { abi } = require('../constrants/index.js');
const provider = new ethers.providers.JsonRpcProvider(
  'https://api.baobab.klaytn.net:8651/'
);
const contractAddress = '0xc6097F5347067bFe4AaC77902320131FE7bF07E2';
const privateKey =
  '884ae64d8fc43f49a0c9fbce02f9eabdabfe21cdbe8e9cddb018d2d8016076d0';
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);

const oracleFunction = async () => {
 contract.on('player', async (_player_id) => {
    console.log('--details--', _player_id);
    const player_id = _player_id.toString();
    console.log(player_id);
      try {
        [player_name ,nation, position] = await getPlayerData(player_id)
        console.log("1","Player Name:",player_name, "Nation :",nation, "Position :",position);
      } catch (e) {
        console.error(e);
    }

    const updateData = await contract.updatePlayerDetails(player_id ,player_name ,nation, position)
    console.log("3", updateData);


  });

};
console.log("Started");
oracleFunction();
    
  // const transactionResponse = await userContract.requestPlayerData(172104, {value:ethers.utils.parseEther("2"), gasLimit : 300000})

  // const playerId = data


const getPlayerData = async(data) => {
  try {
    Name = data
    const apiKey = '9IaILakxVouM15BTJFuXhv9lVVRWu1l4Cm6EK5Ycamn86NUbxR4wNaDel5TD';
    const PlayerAPI = `https://soccer.sportmonks.com/api/v2.0/players/${Name}?api_token=${apiKey}`;
    const response = await axios.get(PlayerAPI);
    const PlayerData = response.data;
    player_name_ = PlayerData.data.fullname;
    Nationality_ = PlayerData.data.nationality;
    position_id_ = PlayerData.data.position_id;
    position_id_ = position_id_.toString();
    console.log("2",player_name_,Nationality_,position_id_);
    
    return [player_name_, Nationality_, position_id_]

  } catch (e) {
  console.error(e);
  }
}


