import * as React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MyTag from './MyTag';
import ModuleTag from './ModuleTag';
import WithSaasTag from './WithSaasTag';
import WithSaasTagModule from './WithSaasTagModule';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [forceWhite, setForceWhite] = useState<'white' | ''>('');

  const changeToWhite = React.useCallback(() => {
    //just add/remove a class to parent element
    setForceWhite((oldVal) => {
      if (oldVal === 'white') {
        return '';
      }
      return 'white';
    });
  }, []);

  return (
    <main className={forceWhite}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '90%',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '90%',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
            gap: 5,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {theme.palette.mode} mode using
            <br />
            MUI context
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
          <button onClick={changeToWhite}>
            force {forceWhite ? 'default' : 'white'} theme
            <br />
            with CSS rules
          </button>
        </Box>
        <MyTag />
        <ModuleTag />
        <WithSaasTag />
        <WithSaasTagModule />
      </Box>
    </main>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';

          console.log(`switching  to ${newMode} mode`);

          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
