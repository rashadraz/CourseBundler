import { ColorModeScript, theme, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>
);
