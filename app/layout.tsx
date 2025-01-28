import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";
import InfoBar from '@/components/info-bar'
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "The Why Files",
  description: "Debunking the myths of the world - one file at a time. Or not.",
  icons: {
    icon: [
      { url: '/logo-1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-1.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/logo-1.png', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/logo-1.png' },
    ],
  },
};

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} bg-background text-foreground`}>
        <Analytics />
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
            {/* Wrap the SVGs in a fixed container with a negative z-index */}
            <div className="fixed inset-0 -z-10">
              {questionMarkPositions.map((pos, index) => (
                <svg
                  key={index}
                  className="absolute text-red-500 opacity-10"
                  style={{ left: pos.left, top: pos.top, width: '3rem', height: '3rem' }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1.07-7.75c-.9.92-1.07 1.25-1.07 2.25h-2v-.5c0-1.1.45-1.79 1.07-2.41.63-.63 1.13-1.13 1.13-2.09 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.39-.56 2.14-1.93 3.25z" />
                </svg>
              ))}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
