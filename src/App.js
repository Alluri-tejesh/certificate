import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Certificate from './components/Certificate/Certificate';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <header>
        <h1>Vra</h1>
      </header>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
        <Route path='/certificate' element={<Certificate/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
