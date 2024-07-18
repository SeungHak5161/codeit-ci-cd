import "@/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <SpeedInsights />;
    </>
  );
}
