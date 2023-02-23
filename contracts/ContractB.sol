// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface Oracle {
    function getPlayerDetails(uint player_id) external view returns(string memory, string memory, uint);
    function requestPlayer(uint player_id) external payable returns(string memory);
}

contract Contract2 {
    address oracleAddress;

    constructor(address _c1)  {
       oracleAddress = _c1;
    }

    function requestPlayerData(uint256 _player_id)public payable returns (string memory){
        string memory success = Oracle(oracleAddress).requestPlayer{value:msg.value}(_player_id);
        return (success);
    }

    function retreiveData(uint _player_id) public view returns(string memory, string memory, uint){
        return Oracle(oracleAddress).getPlayerDetails(_player_id);
    }
}
