import { useEffectOnce, useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { Chain, hardhat } from "viem/chains";
import { Connector, useAccount, useConnect } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { useGlobalState } from "~~/services/store/store";
import { burnerWalletId } from "~~/services/web3/wagmi-burner/BurnerConnector";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const SCAFFOLD_WALLET_STORAGE_KEY = "WLSX.wallet";
const WAGMI_WALLET_STORAGE_KEY = "wagmi.wallet";

// ID of the SAFE connector instance
const SAFE_ID = "safe";

/**
 * This function will get the initial wallet connector (if any), the app will connect to
 * @param initialNetwork
 * @param previousWalletId
 * @param connectors
 * @returns
 */
const getInitialConnector = (
  initialNetwork: Chain,
  previousWalletId: string,
  connectors: Connector[],
): { connector: Connector | undefined; chainId?: number } | undefined => {
  // Look for the SAFE connector instance and connect to it instantly if loaded in SAFE frame
  const safeConnectorInstance = connectors.find(connector => connector.id === SAFE_ID && connector.ready);

  if (safeConnectorInstance) {
    return { connector: safeConnectorInstance };
  }

  const allowBurner = scaffoldConfig.onlyLocalBurnerWallet ? initialNetwork.id === hardhat.id : true;

  if (!previousWalletId) {
    // The user was not connected to a wallet
    if (allowBurner && scaffoldConfig.walletAutoConnect) {
      const connector = connectors.find(f => f.id === burnerWalletId);
      return { connector, chainId: initialNetwork.id };
    }
  } else {
    // the user was connected to wallet
    if (scaffoldConfig.walletAutoConnect) {
      if (previousWalletId === burnerWalletId && !allowBurner) {
        return;
      }

      const connector = connectors.find(f => f.id === previousWalletId);
      return { connector };
    }
  }

  return undefined;
};

/**
 * Automatically connect to a wallet/connector based on config and prior wallet
 */
export const useAutoConnect = (): void => {
  // const setAddress = useGlobalState(({ setAddress }) => setAddress);

  const wagmiWalletValue = useReadLocalStorage<string>(WAGMI_WALLET_STORAGE_KEY);
  const [walletId, setWalletId] = useLocalStorage<string>(SCAFFOLD_WALLET_STORAGE_KEY, wagmiWalletValue ?? "", {
    initializeWithValue: false,
  });
  const connectState = useConnect();
  useAccount({
    onConnect({ connector }) {
      setWalletId(connector?.id ?? "");
      // console.log(wagmiWalletValue)
      // setAddress(wagmiWalletValue);
    },
    onDisconnect() {
      window.localStorage.setItem(WAGMI_WALLET_STORAGE_KEY, JSON.stringify(""));
      setWalletId("");
    },
  });

  useEffectOnce(() => {
    const initialConnector = getInitialConnector(getTargetNetworks()[0], walletId, connectState.connectors);
    if (initialConnector?.connector) {
      connectState.connect({ connector: initialConnector.connector, chainId: initialConnector.chainId });
    }
  });
};
