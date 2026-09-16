import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imelda & Kenneth | Konsultan Kesehatan TWS",
  description:
    "Pendampingan kesehatan dan kebugaran personal oleh konsultan bersertifikat TWS, Imelda dan Kenneth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
