// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract PlayerDataContract {

    struct PlayerData {
        string player_name;
        string Nationality;
        uint position_id;
    }

    event player(uint player_id);

    mapping (uint => PlayerData) public playerData;

    function updateWeather(uint player_id,  string memory _player_name, string memory _Nationality, uint _position_id) public {
        playerData[player_id].player_name = _player_name;
        playerData[player_id].Nationality = _Nationality;
        playerData[player_id].position_id = _position_id;
    }

    function requestPlayer(uint player_id) public returns(uint) {
        emit player(player_id);
    }

    function getStock(uint player_id) public view returns(string memory, string memory, uint){
        PlayerData memory currentplayerdata = playerData[player_id];
        return (currentplayerdata.player_name, currentplayerdata.Nationality, currentplayerdata.position_id);
    }
}


