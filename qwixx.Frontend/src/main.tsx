import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/nprogress/styles.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",

});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>

  </StrictMode>,
)
