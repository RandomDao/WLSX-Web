import { USDTResolution, WLSXMessage, WLSXToken } from "./config/config";
import moment from "moment";
import { formatUnits, parseUnits } from "viem";
import { signin } from "~~/services/api/api";
import { signMessage } from '@wagmi/core'
export const toUSDT = (num: any) => {
  if (num) return parseUnits(num.toString(), USDTResolution);
};
// export const toEth = (num: any) => {
//   if (num) return parseFloat(parseUnits(num.toString(), USDTResolution));
// };
export const cardTimeFormate = (time: any) => {
  return moment.unix(time).format("DD MMM YYYY, HH:mm a UTC");
};
export const moneyFormate = (num: string, bool = false) => {
  const a = formatUnits(BigInt(num ?? ""), USDTResolution);
  if (bool) return a;
  return numFormat(parseFloat(a), 0);
};
export const countDown = (time: any) => {
  const class_time: any = moment.unix(time).utc(); //将时间字符串转换为时间.
  const now_time: any = moment.utc();
  const totalSecs = (class_time - now_time) / 1000; //获得两个时间的总毫秒数. 靠前的就调换再减。
  const days = Math.floor(totalSecs / 3600 / 24);
  const hours = Math.floor((totalSecs - days * 24 * 3600) / 3600);
  const mins = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60);
  const secs = Math.floor(totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60);
  const t = {
    days: days.toString().length > 1 ? days : `0${days}`,
    hours: hours.toString().length > 1 ? hours : `0${hours}`,
    mins: mins.toString().length > 1 ? mins : `0${mins}`,
    secs: secs.toString().length > 1 ? secs : `0${secs}`
  }
  return t;
};
export const timeCount = (time: any) => {
  const nowStr = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  const now = moment(nowStr).utc();
  const targetTime = moment.unix(time);
  if (now.isAfter(targetTime)) return true;
  return false;
};
const numFormat = (num: number, digits: number | undefined) => {
  const si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};
export const shortAddress = (address: string) => {
  return address?.slice(0, 4) + "..." + address?.slice(-4);
};
let isSigning = false;
export const solarSign = async ({ refesh = false, setToken }: any) => {
  console.log(refesh)

  // if (refesh) window.location.reload();
  if (isSigning) return
  const address = window.localStorage.getItem("solarAddress");
  isSigning = true;
  const signature = await signMessage({ message: WLSXMessage });
  const param = {
    address,
    message: WLSXMessage,
    signature,
  };
  const res = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjB4NGI1RUY3Y0E1ODBEYjZmOThENzk0QTFiNzhkNTY3NzNCYzgzRjlEMyIsInVzZXJJZCI6MTIsImlhdCI6MTcxNjcwODM5MCwiZXhwIjoxNzE2Nzk0NzkwfQ.406bJk9onFKhljEgvSK-fzIyeR-ERYxSriVHR8515wk"
  };;
  window.localStorage.setItem(WLSXToken, res.token);
  setToken && setToken(res.token);
  isSigning = false;
  if (refesh) window.location.reload();
};
