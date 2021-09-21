const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contract('Simple Smart Contract', function(){
    it('Should deploy smart contract properly', async function(){

        const simpleSmartContract = await SimpleSmartContract.deployed();
        console.log(simpleSmartContract.address);
        assert(simpleSmartContract.address !== '');
    })
});