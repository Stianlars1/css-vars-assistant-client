import "./globals.css";
// Also used by not-found; load with the shell to preserve styles across routes.
import "@/components/site/ContentPage.module.scss";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { geistMono, geistSans } from "@/fonts/geist/geist";
import { inter } from "@/fonts/inter/inter";
import { jetbrainsMono } from "@/fonts/jetbrains-mono/jetbrains-mono";
import { APP_NAME, HOST } from "@/lib/config";
import { GoogleAnalyticsProvider } from "@/lib/analytics/GoogleAnalyticsProvider";
import { siteMetadata } from "@/lib/siteMetadata";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const description =
  "Find stylesheet variables, preview values, and see themes and sources in your JetBrains IDE. CSS, SCSS, Sass and LESS. Free and open source.";

export const metadata: Metadata = {
  ...siteMetadata(APP_NAME, description, "/"),
  metadataBase: new URL(HOST),
  title: {
    default: `${APP_NAME} - Know your tokens. Keep your flow.`,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  authors: [{ name: "Stian Larsen", url: "https://stianlarsen.com" }],
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <GoogleAnalyticsProvider />
        <Analytics />
      </body>
    </html>
  );
}
