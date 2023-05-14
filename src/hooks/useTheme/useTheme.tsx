import React from 'react';

const useTheme = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    switch (theme) {
      case 'light': {
        document.documentElement.style.setProperty('--background-color', '#');
        document.documentElement.style.setProperty(
          '--font-color',
          `var(--color-blue-400)`
        );
        break;
      }
      case 'dark': {
        document.documentElement.style.setProperty(
          '--background-color',
          'var(--color-blue-500)'
        );
        document.documentElement.style.setProperty(
          '--font-color',
          'var(--color-blue-300)'
        );
        break;
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { toggleTheme, theme };
};
type TTheme = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};
const themeContext = React.createContext<TTheme>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useToggleTheme = () => React.useContext(themeContext);
