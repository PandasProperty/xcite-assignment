import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import { Suspense } from "react";
import Loading from "@/components/loading";
import Error from "@/components/error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xcite Assignment",
};

const fetchValidation = async () => {
  const res = await fetch("http://127.0.0.1:3000/validation");
  const { valid } = await res.json();
  return { valid };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { valid } = await fetchValidation();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full bg-white overflow-x-hidden pt-16 pb-4 space-y-12">
          { 
            valid ? (
            <>
              <Menu />
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </>
          ) : (
            <Error error="Access restricted for your ip /location." />
          )
        }
        </main>
        </body>
    </html>
  );
}
