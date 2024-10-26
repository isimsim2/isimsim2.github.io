import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuitarChords from './GuitarChords';
import ChordDetails from './ChordDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuitarChords />} />
        <Route path="/chord/:chord" element={<ChordDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
