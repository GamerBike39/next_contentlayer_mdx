import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import NavBar from "@/components/ui/navigation/NavBar";
import { SoundContextProvider } from "@/providers/SoundProvider";
import CurvedMenu from "@/components/ui/navigation/header/CurvedMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JulDev | Blogfolio ",
  description:
    "Bienvenue sur mon blogfolio, je suis Julien, développeur web et mobile. Je partage ici mes expériences, mes projets et mes passions.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" suppressHydrationWarning={true} className="overflow-auto">
      <body
        className={`relative antialiased min-h-screen bg-lightGradient2 dark:bg-darkGradient3 text-zinc-900 dark:text-slate-50 ${inter.className}`}
      >
        <SoundContextProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <CurvedMenu />
            <div className="max-w-7xl mx-auto px-4">
              <header className="hidden lg:block fixed top-0 max-w-7xl w-full z-[500] bg-background/30 rounded-md backdrop-blur-md py-2 px-10">
                <NavBar />
              </header>
            </div>
            <main>{children}</main>
            {/* <Analytics /> */}
          </ThemeProvider>
        </SoundContextProvider>
      </body>
    </html>
  );
}
