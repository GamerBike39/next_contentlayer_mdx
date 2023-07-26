import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import NavBar from "@/components/ui/navigation/NavBar";
import { SoundContextProvider } from "@/providers/SoundProvider";
import Pagetransition from "@/components/animations/PageTransition";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`relative antialiased min-h-screen bg-white dark:bg-[#1B1A21] text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <SoundContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Pagetransition />
            <div className="max-w-7xl mx-auto py-10 px-4">
              <header>
                <NavBar />
              </header>
              <main>{children}</main>
            </div>
            <Analytics />
          </ThemeProvider>
        </SoundContextProvider>
      </body>
    </html>
  );
}
