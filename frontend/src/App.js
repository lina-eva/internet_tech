import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TariffList from './components/TariffList';
import TariffForm from './components/TariffForm';
import {
  appStyle,
  border,
  theme
} from './style';

function App() {
    const [form, setForm] = useState(false);
    console.log(form);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorSheme />
            <Box sx={appStyle}>
                <TariffList opened={form} openForm={() => setForm(true)}/>
                <TariffForm open={form} closeForm={() => setForm(false)} />
            </Box>
        </ThemeProvider>
  );
}

export default App;
