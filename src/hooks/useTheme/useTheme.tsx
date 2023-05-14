import React from 'react';

const useTheme = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    switch (theme) {
      case 'light': {
        document.documentElement.style.setProperty(
          '--background-color',
          '#efefef'
        );
        document.documentElement.style.setProperty('--font-color', `#242a3a`);
        break;
      }
      case 'dark': {
        document.documentElement.style.setProperty(
          '--background-color',
          '#222222'
        );
        document.documentElement.style.setProperty('--font-color', '#7cbcde');
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
theme : 'light' | 'dark',
toggleTheme: () => void
}
const themeContext = React.createContext<TTheme>({theme:'light',toggleTheme:()=>{}});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useToggleTheme = () => React.useContext(themeContext);
