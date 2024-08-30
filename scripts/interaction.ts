import { ethers } from "hardhat";


//0x140629e8D17B63D299e6497c1da3CD9EAde17a8b token
async function main() {
    // const web3CXITokenAddress = "0xaDBA987955Eac146f1983062100046be46e632fA";
    // const saveERC20ContractAddress = "0xD410219f5C87247d3F109695275A70Da7805f1b1";


    const web3CXITokenAddress = "0x140629e8D17B63D299e6497c1da3CD9EAde17a8b";

    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);


    const saveERC20ContractAddress = "0x016b08584FaE58d1273dF425486a826a05cfB6cD";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    // console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    // console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    // console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction

    const withdrawAmount = ethers.parseUnits("30",18);
    const withdrawTx = await saveERC20.withdraw(withdrawAmount);
    console.log(withdrawTx, "withdrawal transaction")

    withdrawTx.wait();



    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
