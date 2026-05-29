import { Anek_Bangla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-anek-bangla",
  display: "swap",
});

export const metadata = {
  title: "Tandhan Group",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anekBangla.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
