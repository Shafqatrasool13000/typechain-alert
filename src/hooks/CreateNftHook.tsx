import { useCallback } from "react";
import { getSigner } from "../utils/connectors";
import { Signer } from "ethers";
import { FactoryContractHandler } from "../utils/contracts";
import { TokenFactory } from "../typechain-types";

export const CreateNftHook = () => {

    return useCallback(
        async (name: string, symbol: string, handleShow: any, setData: any): Promise<void> => {
            const signer: Signer = await getSigner();
            let token: TokenFactory = FactoryContractHandler(signer);
            try {
                const tx = await token.createNFT(name, symbol);
                await tx.wait();
                handleShow();
                console.log(tx, 'data in tex')
            } catch (error) {
                console.log(error);

            }
        },
        []
    );
};
