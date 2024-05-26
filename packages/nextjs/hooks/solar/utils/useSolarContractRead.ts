import type { ExtractAbiFunctionNames } from "abitype";
import { useContractRead } from "wagmi";
import {
  AbiFunctionReturnType,
  ContractAbi,
  ContractName,
} from "~~/utils/scaffold-eth/contract";

/**
 * Wrapper around wagmi's useContractRead hook which automatically loads (by name) the contract ABI and address from
 * the contracts present in deployedContracts.ts & externalContracts.ts corresponding to targetNetworks configured in scaffold.config.ts
 * @param config - The config settings, including extra wagmi configuration
 * @param config.contractName - deployed contract name
 * @param config.functionName - name of the function to be called
 * @param config.args - args to be passed to the function call
 */
export const useSolarContractRead = (functionName: any, abiConfig: any, args: any) => {
  // const { data: deployedContract } = useDeployedContractInfo(contractName);

  return useContractRead({
    functionName,
    ...abiConfig,
    // address: deployedContract?.address,
    // abi: deployedContract?.abi,
    watch: true,
    args,
    enabled: !Array.isArray(args) || !args.some(arg => arg === undefined),
  }) as Omit<ReturnType<typeof useContractRead>, "data" | "refetch"> & {
    data: AbiFunctionReturnType<ContractAbi, any> | undefined;
    refetch: (options?: { throwOnError: boolean; cancelRefetch: boolean }) => Promise<any>;
  };
};
