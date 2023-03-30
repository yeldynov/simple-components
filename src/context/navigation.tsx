import { createContext, useState, useEffect } from 'react';

export type NavigationContextType = {
  currentPath: string;
  navigate: (to: string) => void;
};

const NavigationContext = createContext<NavigationContextType>(
  {} as NavigationContextType
);

interface Props {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: Props) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // handle user clicking -> and <- buttons in the browser
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
