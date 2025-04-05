//Env
import dotenv from "dotenv";
dotenv.config();

//CSS
import "./globals.css";

//Font
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

//components
import { Header, PageTransition, StairTransition } from "../components/";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        ></meta>
      </head>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
