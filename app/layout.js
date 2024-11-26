import { Inter } from "next/font/google";
import Head from "@node_modules/next/head";
import Footer from "@components/ui/Footer";
import Navbar from "@components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "TradersCrib",
  description: "Enter the trading market with minimal risk.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="utf-8" />
        </head>

        <body className="bg-gray-900">
          <Head>
            <title>Mailgo</title>
            <meta
              name="description"
              content="Gain control of your business's growth with Mailgo's comprehensive marketing, automation, and email marketing platform."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
