"use client";

import { Box, Typography, Stack, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import CryptoMarketData from "./MarketValue";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { RestaurantContext } from "@context/RestaurantContext";
import ErrorIcon from "@mui/icons-material/Error";
import TableComponent from "./Table";

const Card = ({ title, type }) => {
  const [active, setActive] = useState("ultimate1");
  const { myWallet, formatMoney } = useContext(RestaurantContext);
  if (type === "investment")
    return (
      <Box
        className="rounded-xl"
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        }}
      >
        <Box>
          <Typography
            className="rounded-xl"
            style={{
              textAlign: "center",
              color: "white",
              background: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              height: "55vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Box
              onClick={() => setActive("ultimate1")}
              sx={{
                border: `0.1px solid ${
                  active === "ultimate1" ? "#00ACAC" : "white"
                }`,
              }}
              className=" rounded-xl mt-4 p-2 bg-[#2A2A4C] cursor-pointer"
            >
              <Typography className="text-white text-center ">
                Ultimate
              </Typography>
              <Typography className="text-white text-center ">
                Referal Bonus 5%
              </Typography>
              <Typography className="text-white text-center ">
                Cancel at anytime
              </Typography>
            </Box>
            <Stack
              direction="row"
              className="mt-3"
              justifyContent="space-between"
            >
              <Box
                onClick={() => setActive("pro")}
                sx={{
                  border: `0.1px solid ${
                    active === "pro" ? "#00ACAC" : "white"
                  }`,
                }}
                className="rounded-xl p-2 bg-[#2A2A4C] mr-1 cursor-pointer"
              >
                <Typography className="text-white text-center ">PRO</Typography>
                <Typography className="text-white text-center ">
                  Referal Bonus 9%
                </Typography>
                <Typography className="text-white text-center ">
                  Cancel at anytime
                </Typography>
              </Box>{" "}
              <Box
                onClick={() => setActive("ultimate2")}
                sx={{
                  border: `0.1px solid ${
                    active === "ultimate2" ? "#00ACAC" : "white"
                  }`,
                }}
                className="rounded-xl p-2 bg-[#2A2A4C] ml-1 cursor-pointer"
              >
                <Typography className="text-white text-center ">
                  Ultimate
                </Typography>
                <Typography className="text-white text-center ">
                  Referal Bonus 13%
                </Typography>
                <Typography className="text-white text-center ">
                  Cancel at anytime
                </Typography>
              </Box>{" "}
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  if (type === "payment")
    return (
      <Box
        className="rounded-xl"
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        }}
      >
        <Box>
          <Typography
            className="rounded-xl"
            style={{
              textAlign: "center",
              color: "white",
              background: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            className="mt-3 p-2 rounded-xl bg-blue-950 bg-opacity-50"
            sx={{
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ height: "55vh", width: "100%" }}>
              <Box sx={{ width: "100%" }} className="mt-3">
                <select
                  style={{ width: "100%", background: "#4D4D6C" }}
                  className="rounded-2xl text-white py-2"
                >
                  <option>Bitcoin</option>
                  <option>Litecoin </option>
                  <option>Dogecoin </option>
                  <option>Etherium </option>
                  <option>Bitcoin Cash </option>
                  <option>Dash </option>
                  <option>USDT TRC20 </option>
                  <option>Tron </option>
                  <option>USTC ERC20 </option>
                </select>
              </Box>

              <Box className="mt-3">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#4D4D6C",
                  }}
                  className="rounded-2xl text-white py-2 px-1"
                >
                  <Typography className="text-white">$</Typography>
                  <input
                    className="py-1"
                    type="number"
                    style={{ width: "100%", background: "transparent" }}
                    placeholder="Enter amount 10 - 250000"
                  />
                </div>
              </Box>

              <button
                style={{ background: "#01CACA" }}
                className="mt-4 rounded-2xl bg-[]-600 py-2 w-[100%] text-white"
              >
                Make a Deposit
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  if (type === "market")
    return (
      <Box
        className="rounded-xl"
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        }}
      >
        <Box>
          <Typography
            className="rounded-xl"
            style={{
              textAlign: "center",
              color: "white",
              background: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            className="mt-3 p-2 rounded-xl bg-blue-950 bg-opacity-50"
            sx={{
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CryptoMarketData />
          </Box>
        </Box>
      </Box>
    );
  if (type === "balance")
    return (
      <Box
        className="rounded-xl"
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        }}
      >
        <Box>
          <Typography
            className="rounded-xl"
            style={{
              textAlign: "center",
              color: "white",
              background: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            className="mt-3 p-2 rounded-xl bg-blue-950 bg-opacity-50"
            sx={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className="h-[20%]">
              <IconButton>
                <MonetizationOnIcon
                  className="text-white"
                  sx={{ width: 100, height: 100 }}
                />
              </IconButton>
            </Box>
            <Typography className="text-white text-sm text-center">
              Funds available for withdrawal, withdrawals would be charged from
              this balance.
            </Typography>
            <Typography className="text-white p-2 bg-black rounded-2xl mt-5 text-2xl">
              {formatMoney(myWallet?.balance) || 0.0}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  if (type === "withdrawal")
    return (
      <Box
        className="rounded-xl"
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        }}
      >
        <Box>
          <Typography
            className="rounded-xl"
            style={{
              textAlign: "center",
              color: "white",
              background: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            className="mt-3 p-2 rounded-xl bg-blue-950 bg-opacity-50"
            sx={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className="h-[20%]">
              <IconButton>
                <ErrorIcon
                  className="text-white"
                  sx={{ width: 100, height: 100 }}
                />
              </IconButton>
            </Box>
            <Typography className="text-white text-sm text-center">
              No funds to withdraw. At least $10 balance is needed.
            </Typography>
            {/* <Typography className="text-white p-2 bg-black rounded-2xl mt-5 text-2xl">
              {formatMoney(myWallet?.balance) || 0.0}
            </Typosgraphy> */}
          </Box>
        </Box>
      </Box>
    );
  if (type === "deposit")
    return (
      <Box
        className="rounded-xl"
        sx={{
          width: "100%",
          height: "100%",
          padding: "10px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        }}
      >
        <Box>
          <Typography
            className="rounded-xl"
            style={{
              textAlign: "center",
              color: "white",
              background: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            className="mt-3 p-2 rounded-xl bg-blue-950 bg-opacity-50"
            sx={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TableComponent />
          </Box>
        </Box>
      </Box>
    );
};

export default Card;
