import { useCallback } from "react";
import { getSigner } from "../utils/connectors";
import { ethers, Signer } from "ethers";
import { FactoryContractHandler } from "../utils/contracts";
import { TokenFactory } from "../typechain-types";


export const CreateFactoryContractHook = () => {

    return useCallback(
        async (name: string, symbol: string, initialSupply: string, handleChange: any, setData: any, setLoading: any): Promise<void> => {
            const signer: Signer = await getSigner();

            let token: TokenFactory = FactoryContractHandler(signer);
            try {
                const tx = await token.createToken(name, symbol, ethers.utils.parseEther(initialSupply));
                setLoading(true)
                const res = await tx.wait()
                const log = res.events?.find(e => e.event === "ERC20Created")
                setLoading(false);
                setData(log?.address)
                handleChange();

            } catch (error) {
                console.log(error);
            }
        },
        []
    );
};


