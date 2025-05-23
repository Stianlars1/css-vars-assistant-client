import "./globals.css";
import { assistant, dmSans, geistMono, geistSans, inter } from "@/fonts";
import { cx } from "@/utils/cx";
import Head from "next/head";
import { PageContainer } from "@/components/layout/PageContainer/PageContainer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          dmSans.variable,
          assistant.variable,
        )}
      >
        <PageContainer>
          <Navbar />
          {children}
        </PageContainer>
      </body>
    </html>
  );
}
