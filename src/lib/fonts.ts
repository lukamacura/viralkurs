import localFont from "next/font/local";

export const supreme = localFont({
  src: [
    { path: "../../public/fonts/Supreme-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Supreme-Bold.woff2",    weight: "700", style: "normal" },
    { path: "../../public/fonts/Supreme-Italic.woff2",  weight: "400", style: "italic" },
  ],
  variable: "--font-supreme",
  display: "swap",
});

export const bespokeStencil = localFont({
  src: [
    { path: "../../public/fonts/BespokeStencil-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/BespokeStencil-Bold.woff2",    weight: "700", style: "normal" },
  ],
  variable: "--font-bespoke",
  display: "swap",
});
