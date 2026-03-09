import "./globals.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";


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
        <Footer/>
      </body>
    </html>
  );
}
