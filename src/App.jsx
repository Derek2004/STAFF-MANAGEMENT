import React from 'react';
import Staff from './components/Staff';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Staff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

