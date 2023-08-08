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
    <html lang="fr" suppressHydrationWarning={true}>
      <body
        className={`relative antialiased min-h-screen bg-lightGradient2 dark:bg-darkGradient3 text-zinc-900 dark:text-slate-50 ${inter.className}`}
      >
        <SoundContextProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <CurvedMenu />
            <main>{children}</main>
            {/* <Analytics /> */}
          </ThemeProvider>
        </SoundContextProvider>
      </body>
    </html>
  );
}
