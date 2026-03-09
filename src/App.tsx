import { type CSSProperties } from 'react';
import Input from './components/Input';
import Display from './components/Display';
import {LetterProvider} from './contexts/Ctx';
import Home from './components/Home';
import Palpite from './components/Palpite';
import Historico from './components/Historico';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export default function App(){
  return(
    <LetterProvider>
      <div style={appSld}>
        <h1 style={titleSld}>Números em Bolinhas</h1>
        
    <Router>
        <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/palpite" element={<Palpite />} />
        <Route path ="/historico" element={<Historico />} />
        </Routes>
    
    </Router>
 
      </div>
    </LetterProvider>
  );
}

const appSld: CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f2f5",
  margin: 0,
  padding: "20px",
  boxSizing: "border-box",
  fontFamily: "Arial, sans-serif"
};

const titleSld: CSSProperties = {
  marginBottom: "40px",
  color: "#1a1a1a",
  fontSize: "2.5rem",
  textAlign: "center"
};