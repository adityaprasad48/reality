import { createContext, useContext, useMemo, useState } from "react";

const screenPopInitialState = {
  timer: false,
  music: false,
};

export const ScreenPopContext: any = createContext<any>(screenPopInitialState);

// Step 2: Create a custom hook to access the context's state and methods
const useScreenPopCtx = () => {
  const context = useContext(ScreenPopContext);
  if (!context) {
    throw new Error(
      "ScreenPopContext must be used within a ScreenPopContextProvider"
    );
  }
  return context;
};

// Step 3 (Optional): Create a provider component
const ScreenPopProvider = ({ children }: any) => {
  const [screenPop, setScreenPop] = useState<any>(screenPopInitialState);

  const contextValue = useMemo(
    () => ({
      screenPop,
      setScreenPop,
    }),
    [screenPop, setScreenPop]
  );
  return (
    <ScreenPopContext.Provider value={contextValue}>
      {children}
    </ScreenPopContext.Provider>
  );
};

export { ScreenPopProvider, useScreenPopCtx };
