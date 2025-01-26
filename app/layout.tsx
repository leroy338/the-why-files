import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import InfoBar from '@/components/info-bar'
import { Footer } from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "The Why Files",
  description: "Debunking the myths of the world - one file at a time. Or not.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            {/* Background gradient and question marks */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200/70 to-emerald-300/80 dark:from-gray-900/50 dark:via-gray-900/30 dark:to-emerald-900/50" />
              
              {/* Question mark pattern */}
              <div className="absolute inset-0 overflow-hidden">
                {questionMarkPositions.map((position, i) => (
                  <div
                    key={i}
                    className="absolute text-emerald-600/5 text-6xl font-bold select-none"
                    style={{
                      left: position.left,
                      top: position.top,
                    }}
                  >
                    ?
                  </div>
                ))}
              </div>
            </div>

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
