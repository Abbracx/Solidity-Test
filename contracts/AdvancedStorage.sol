pragma solidity ^0.8.0;

/**
 * The AdvancedStorage contract does this and that...
 */
contract AdvancedStorage {

  uint[] public ids;

  function add (uint id) public {
      ids.push(id);
  }

  function get(uint i) view public returns(uint){
    return ids[i];
  }

  function getAll() view public returns(uint[] memory){
    return ids;
  }

  function length() view public returns(uint){
    return ids.length;
  }

}
