import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Katana Labs — Webdesign, KI Automation & Digitale Sichtbarkeit",
  description: "Handgesetzte Websites, KI-Stimmen, Chatbots, CRM-Automation. Präzise. Scharf. Ohne Schnörkel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Anton&family=Noto+Serif+JP:wght@400;700;900&family=Shippori+Mincho:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
