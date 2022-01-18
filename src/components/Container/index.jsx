import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({
  height, width, bgcolor, children
}) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height, width, bgcolor }}>
          {children}
        </Box>
      </Container>
    </>
  );
}
