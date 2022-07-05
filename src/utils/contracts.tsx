import { Signer } from "ethers";
import { TokenFactory, TokenFactory__factory } from "../typechain-types";
import { factoryContract } from "./constants";

export const FactoryContractHandler = (singer: Signer): TokenFactory => {
    return TokenFactory__factory.connect(factoryContract.contractAddress,singer);
};





