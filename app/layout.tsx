import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boba House | Sip Happiness, Every Day",
  description: "Handcrafted boba drinks made with premium ingredients.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
