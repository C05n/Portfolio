import { Montserrat, Bodoni_Moda } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"]
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"]
})

export const metadata = {
  title: "C05n - Portfolio",
  description: "Portfolio de C05n, développeur web front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bodoniModa.className}, ${montserrat.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}