import { Archivo } from "next/font/google";
import localFont from "next/font/local";

export const areaNormal = localFont({
  src: [
    {
      path: "./area-normal-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
