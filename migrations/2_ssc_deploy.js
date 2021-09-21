const SimpleSmartContract = artifacts.require("SimpleSmartContract");

module.exports = async function (deployer) {
  await deployer.deploy(SimpleSmartContract);
};
