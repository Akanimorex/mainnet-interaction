import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x140629e8D17B63D299e6497c1da3CD9EAde17a8b";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x016b08584FaE58d1273dF425486a826a05cfB6cD
