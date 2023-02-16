// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Oracle is Ownable{

    struct PlayerData {
        string player_name;
        string Nationality;
        uint position_id;
    }

    event player(uint player_id);
    address public payer;

    mapping (uint => PlayerData) public playerData;

    modifier onlyPayer{
        require(tx.origin == payer, "Not the payer broooo");
        _;
    }

    function updatePlayerDetails(uint player_id,  string memory _player_name, string memory _Nationality, uint _position_id) onlyOwner public {
        playerData[player_id].player_name = _player_name;
        playerData[player_id].Nationality = _Nationality;
        playerData[player_id].position_id = _position_id;
    }

    function payForPlayerData() public payable returns(bool){
        require(msg.value >= 1 ether, "Payment must be at least 1 ether");
        payer = payable(tx.origin);
        return true;
    }

    function requestPlayer(uint player_id) onlyPayer public returns(string memory) {
        emit player(player_id);
        return "Successfully Submitted the request";
    }

    function getPlayerDetails(uint player_id) public view returns(string memory, string memory, uint){
        PlayerData memory currentplayerdata = playerData[player_id];
        return (currentplayerdata.player_name, currentplayerdata.Nationality, currentplayerdata.position_id);
    }
}


