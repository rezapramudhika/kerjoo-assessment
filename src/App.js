import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TestGrid from './components/TestGrid';
import TestSelect from './components/TestSelect';
import TestFlex from './components/TestFlex';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/test-grid' element={<TestGrid />} />
        <Route path='/test-flex' element={<TestFlex />} />
        <Route path='/test-select' element={<TestSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
