import { useNavigate } from "react-router-dom";
import { type CSSProperties } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={homeSld}>
      <h1 style={textSld}>Bem-vindo!</h1>
      <p style={descSld}>Gere os teus números da sorte para a Mega-Sena.</p>
      
      <div style={buttonGroupSld}>
        <button 
          style={primaryBtnSld} 
          onClick={() => navigate("/palpite")}
        >
          Clique para começar
        </button>
        
        <button 
          style={secondaryBtnSld} 
          onClick={() => navigate("/historico")}
        >
          Ver Histórico
        </button>
      </div>
    </div>
  );
}

// Estilos
const homeSld: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "40px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};

const textSld: CSSProperties = { fontSize: "32px", color: "#333", margin: 0 };
const descSld: CSSProperties = { color: "#666", textAlign: "center" };
const buttonGroupSld: CSSProperties = { display: "flex", flexDirection: "column", gap: "10px", width: "100%" };

const primaryBtnSld: CSSProperties = {
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer"
};

const secondaryBtnSld: CSSProperties = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer"
};