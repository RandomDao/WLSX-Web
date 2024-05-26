/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { Switch, styled } from "@mui/material";
import { useTheme } from "next-themes";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = resolvedTheme === "dark";
  const MaterialUISwitch = styled(Switch)(() => ({
    width: 71,
    height: 38,
    padding: 0,
    borderRadius: 80,
    margin: "0!important",
    // padding: 7,
    "& .MuiSwitch-switchBase": {
      // margin: 1,
      marginTop: "4px",
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(34px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url(/theme-drak.png)`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#c4c3df",

          // backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      // backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      boxShadow: "none",
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(/theme-drak.png)`,
        borderRadius: "100%",
        backgroundSize: "100% 100%",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#c4c3df",
      // backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      // borderRadius: 20 / 2,
    },
  }));
  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) return null;

  return (
    //  toggle-primary
    <div className={`flex space-x-2 items-center justify-center ${className}`}>
      {/* <FormControlLabel
      className="mr-0"
        control={<MaterialUISwitch sx={{ m: 1 }}  onChange={handleToggle} checked={isDarkMode} />}
        label=""
      /> */}
      {/* <MaterialUISwitch sx={{ m: 1 }} onChange={handleToggle} checked={isDarkMode} /> */}
      {/* <input
        id="theme-toggle"
        type="checkbox"
        className="toggle toggle-theme"
        onChange={handleToggle}
        checked={isDarkMode}
      /> */}
      {/* {
        <label htmlFor="theme-toggle" className={`swap swap-rotate ${!isDarkMode ? "swap-active" : ""}`}>
          <SunIcon className="swap-on h-5 w-5" />
          <MoonIcon className="swap-off h-5 w-5" />
        </label>
      } */}
    </div>
  );
};
