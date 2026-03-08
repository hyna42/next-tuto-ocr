import "./globals.css";
import Navigation from "../components/Navigation/Navigation";


export const metadata = {
  title: "Portfolio Amadou",
  description: "Développeur Fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >
        <Navigation/>
        <main>{children}</main>
      </body>
    </html>
  );
}
