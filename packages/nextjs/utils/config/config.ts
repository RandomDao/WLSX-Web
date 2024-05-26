import erc1155 from "~~/utils/abi/erc-1155.json";
import PreMarketABI from "~~/utils/abi/PreMarket.json";
import usdtABI from "~~/utils/abi/usdt.json";

export const USDTResolution = 18;
export const WLSXMessage = "Welcome To WLSX";
export const WLSXToken = "WLSX_TOKEN";
export const WLSXABIAddress = process.env.NEXT_PUBLIC_SOLAR_ABI_Address;
export const usdtABIAddress = process.env.NEXT_PUBLIC_USDT_ABI_Address;
export const nftABIAddress = process.env.NEXT_PUBLIC_NFT_ABIAddress;
export const WLSXAbi = JSON.parse(JSON.stringify(PreMarketABI));
export const usdtAbi = JSON.parse(JSON.stringify(usdtABI));
export const nftAbi = JSON.parse(JSON.stringify(erc1155));

export const WLSXAbiConfig = {
  abi: WLSXAbi,
  address: WLSXABIAddress,
};
export const usdtABIConfig = {
  abi: usdtAbi,
  address: usdtABIAddress,
};
export const nftABIConfig = {
  abi: nftAbi,
  address: nftABIAddress,
};
