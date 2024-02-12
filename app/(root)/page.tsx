"use client";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box className="min-h-screen">
      <div
        style={{
          backgroundImage: "url(/assets/banner-1.png)",
          width: "100%",
          height: "100vh",
        }}
        className="flex flex-col items-center justify-center "
      >
        <div className="flex  flex-col items-center justify-between p-24"></div>
      </div>
    </Box>
  );
}
