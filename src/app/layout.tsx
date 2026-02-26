import type { Metadata } from "next";
import "./globals.css";
import { BookingProvider } from "@/contexts/BookingContext";
import CalendlyModal from "@/components/CalendlyModal";

export const metadata: Metadata = {
  title: "Orbital Pivot | Scale from 10% to 10x",
  description: "A high-impact consulting engagement for Founders ready for the 10x leap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@400,500,600,700,800&f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <BookingProvider>
          {children}
          <CalendlyModal />
        </BookingProvider>
      </body>
    </html>
  );
}
