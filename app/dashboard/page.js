"use client";
import NavPage from "@components/navPage/NavPage";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import Image from "next/image";
import TradingViewWidget from "@components/TradingViewWidget";
import TradingPairWidget from "@components/TradingPairWidget";
import MyOrder from "@components/MyOrder";
import Buy from "@components/Buy";
import MarketNews from "@components/MarketNews";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161722",
        }}
      >
        <CircularProgress className="text-gray-400" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/user/login");
  } else if (session?.user?.role === "user") {
    return (
      <div
        style={{
          height: "100vh",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: "800",
        }}
      >
        {" "}
        <img width={250} height={250} src="/img/unauth.svg" />
        Unauthorized
      </div>
    );
  } else
    return (
      <NavPage>
        <Box sx={{ height: "100%", paddingBottom: "15px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Box
              sx={{
                width: "65%",
                height: "92.3vh",
                overflowY: "scroll",
              }}
            >
              <Stack
                direction={{ md: "row", xs: "column" }}
                sx={{ height: "63vh" }}
                justifyContent="space-between"
              >
                <Box
                  className="rounded-xl"
                  sx={{
                    width: "33%",
                    height: "100%",
                    overflowY: "scroll",
                    border: "1px solid black",
                    padding: "10px",
                    background:
                      "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
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
                      Market
                    </Typography>
                    <Box sx={{ height: "auto", height: "55vh" }}>
                      <TradingViewWidget />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "65%",
                    height: "100%",
                  }}
                >
                  <Box
                    className="rounded-xl"
                    sx={{
                      height: "100%",
                      overflowY: "scroll",
                      border: "1px solid black",
                      padding: "10px",
                      background:
                        "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
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
                        Trading Pairs
                      </Typography>
                      <Box sx={{ height: "52vh" }}>
                        <TradingPairWidget />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Stack>
              <Stack
                className="mt-2"
                direction={{ md: "row", xs: "column" }}
                justifyContent="space-between"
              >
                <MyOrder />
                <Buy title="Buy" />
                <Buy title="Sell" />
              </Stack>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                width: "34%",
                background:
                  "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
              }}
            >
              <MarketNews />
            </Box>
          </Stack>
        </Box>
      </NavPage>
    );
}
