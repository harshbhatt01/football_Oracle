const hre = require("hardhat");
const { Contract, ethers } = require('ethers');
const axios = require('axios');

async function main() {


  const api = await hre.ethers.getContractFactory("PlayerDataContract");
  const _api = await api.deploy();

  await _api.deployed();

  console.log(
    "Address :", _api.address
  );

  const transactionResponse = await _api.requestPlayer(172104)
  const transactionReceipt = await transactionResponse.wait()
  console.log(transactionReceipt.events[0].args.player_id)
  Name = transactionReceipt.events[0].args.player_id


  try {
        Name = transactionReceipt.events[0].args.player_id
        const apiKey = '9IaILakxVouM15BTJFuXhv9lVVRWu1l4Cm6EK5Ycamn86NUbxR4wNaDel5TD';
        const PlayerAPI = `https://soccer.sportmonks.com/api/v2.0/players/${Name}?api_token=${apiKey}`;
        const response = await axios.get(PlayerAPI);
        const PlayerData = response.data;
        //console.log(PlayerData);
        player_name_ = PlayerData.data.fullname;
        Nationality_ = PlayerData.data.nationality;
        position_id_ = PlayerData.data.position_id;
        console.log(player_name_,Nationality_,position_id_); 
        
        const updateData = await _api.updateWeather(Name,player_name_, Nationality_, position_id_)
        //console.log(updateData);
        const finalData = await _api.getStock(Name)
        console.log(finalData)

  } catch (e) {
    console.error(e);
}
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});