import './App.css';
import { Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ShipmentData from './Components/ShipmentData';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Roboto, sans-serif"
  }
});



function App() {

  return (
    <ThemeProvider theme={theme}>

      <ShipmentData />
    </ ThemeProvider>
  );
}

export default App;
