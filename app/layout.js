import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Portfolio Amadou",
  description: "Développeur Fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >
        <main>{children}</main>
      </body>
    </html>
  );
}
