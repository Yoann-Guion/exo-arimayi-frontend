import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { setRequestLocale } from "next-intl/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projet Frontend",
  description: "Espace pour les candidats et recruteurs",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <StoreProvider>
      <html lang={locale}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AntdRegistry>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
