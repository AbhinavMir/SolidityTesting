const SimpleSmartContrat = artifacts.require("SimpleSmartContract");

contract("SimpleSmartContrat", function(accounts) {
  it("should deploy smart contract properly", async() => {
      const simpleSmartContract = await SimpleSmartContrat.deployed();
      console.log(simpleSmartContract.address);
      assert(simpleSmartContract.address !== '');
  })});