import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imelda & Kenneth | TWS Health Consultants",
  description:
    "Personal health and wellness guidance by TWS-certified consultants Imelda and Kenneth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
