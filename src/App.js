import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ShipmentData from './Components/ShipmentData';
import Edit from './Components/Edit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Roboto, sans-serif"
  }
});



function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<ShipmentData post={post} setPost={setPost} />} />
          <Route path='/edit' element={<Edit post={post} setPost={setPost} />} />
        </Routes>
      </Router>
    </ ThemeProvider>
  );
}

export default App;
