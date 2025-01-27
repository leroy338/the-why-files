import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import InfoBar from '@/components/info-bar'
import { Footer } from "@/components/footer";

export const metadata = {
  title: "The Why Files",
  description: "Debunking the myths of the world - one file at a time. Or not.",
};

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const defaultTheme = 'light'

// Fixed positions for question marks to avoid hydration issues
const questionMarkPositions = [
  { left: '5%', top: '10%' },
  { left: '15%', top: '45%' },
  { left: '25%', top: '15%' },
  { left: '35%', top: '85%' },
  { left: '45%', top: '25%' },
  { left: '55%', top: '65%' },
  { left: '65%', top: '35%' },
  { left: '75%', top: '75%' },
  { left: '85%', top: '20%' },
  { left: '92%', top: '55%' },
  { left: '12%', top: '80%' },
  { left: '28%', top: '40%' },
  { left: '38%', top: '5%' },
  { left: '48%', top: '95%' },
  { left: '58%', top: '30%' },
  { left: '68%', top: '70%' },
  { left: '78%', top: '15%' },
  { left: '88%', top: '85%' },
  { left: '95%', top: '45%' },
  { left: '8%', top: '60%' },
  { left: '18%', top: '25%' },
  { left: '32%', top: '50%' },
  { left: '42%', top: '75%' },
  { left: '52%', top: '10%' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <InfoBar />
            <main className="min-h-screen flex flex-col items-center pt-16">
              <div className="flex-1 w-full flex flex-col gap-12 sm:gap-16 md:gap-20 items-center">
                <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 w-full">
                  {children}
                </div>
                <Footer />
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
