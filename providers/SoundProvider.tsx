// SoundContext.tsx
import { createContext, useContext, useState } from "react";

interface SoundContextType {
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function useSoundContext() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error(
      "useSoundContext doit être utilisé dans un SoundContextProvider"
    );
  }
  return context;
}

export function SoundContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}
