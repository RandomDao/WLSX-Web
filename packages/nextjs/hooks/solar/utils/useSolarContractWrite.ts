import { useState } from "react";
import { Abi } from "abitype";
import { useContractWrite } from "wagmi";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

type UpdatedArgs = Parameters<ReturnType<typeof useContractWrite<Abi, string, undefined>>["writeAsync"]>[0];

/**
 * Wrapper around wagmi's useContractWrite hook which automatically loads (by name) the contract ABI and address from
 * the contracts present in deployedContracts.ts & externalContracts.ts corresponding to targetNetworks configured in scaffold.config.ts
 * @param config - The config settings, including extra wagmi configuration
 * @param config.contractName - contract name
 * @param config.functionName - name of the function to be called
 * @param config.args - arguments for the function
 * @param config.value - value in ETH that will be sent with transaction
 * @param config.blockConfirmations - number of block confirmations to wait for (default: 1)
 * @param config.onBlockConfirmation - callback that will be called after blockConfirmations.
 */
export const useSolarContractWrite = (
  functionName: any,
  abiConfig: any,
  args: any,
  value?: any,
  onBlockConfirmation?: any,
  blockConfirmations?: any,
) => {
  const writeTx = useTransactor();
  const [isMining, setIsMining] = useState(false);

  const wagmiContractWrite = useContractWrite({
    ...abiConfig,
    functionName,
    args,
    value: value,
    // ...writeConfig,
  });

  const sendContractWriteTx = async ({
    args: newArgs,
    value: newValue,
    ...otherConfig
  }: {
    args?: any;
    value?: any;
  } & UpdatedArgs = {}) => {
    if (wagmiContractWrite.writeAsync) {
      try {
        console.log({
          args: newArgs ?? args,
          value: newValue ?? value,
          ...otherConfig,
        })
        setIsMining(true);
        const writeTxResult = await writeTx(
          () =>
            wagmiContractWrite.writeAsync({
              args: newArgs ?? args,
              value: newValue ?? value,
              ...otherConfig,
            }),
          { onBlockConfirmation, blockConfirmations },
        );

        return writeTxResult;
      } catch (e: any) {
        throw e;
      } finally {
        setIsMining(false);
      }
    } else {
      notification.error("Contract writer error. Try again.");
      return;
    }
  };

  return {
    ...wagmiContractWrite,
    isMining,
    // Overwrite wagmi's write async
    writeAsync: sendContractWriteTx,
  };
};
