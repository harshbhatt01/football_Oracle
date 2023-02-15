// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./Oracle.sol";

contract Contract2 {
    Oracle c1;
    bool payment;

    constructor(address _c1) public {
        c1 = Oracle(_c1);
    }

    uint256 player_id;

    function requestPlayerData(uint256 _player_id)public payable returns (string memory, bool){
        (bool success) = c1.payForWeatherData{value:msg.value}();

        player_id = _player_id;
        string memory revertString = c1.requestPlayer(_player_id);
        return (revertString,success);
    }

    function getData() public view returns(uint256){
        return(player_id);
    }

    function retreiveData(uint _player_id) public view returns(string memory, string memory, uint){
        return c1.getPlayerDetails(_player_id);
    }
}