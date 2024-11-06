import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Aluna Lavínia Stein",
  description: "Portifólio - Lavínia Stein",
  charset: 'UTF-8',
  author: 'Lavínia Stein',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}