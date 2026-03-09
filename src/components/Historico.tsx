import { useContext, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { LetterContext } from "../contexts/Ctx";

export default function Historico() {
  const navigate = useNavigate();
  const context = useContext(LetterContext);
  
  // Recupera a lista de palpites ou um array vazio se o contexto estiver nulo
  const lista = context?.palpites || [];

  return (
    <div style={historyContainer}>
      <h2 style={titleSld}>Histórico de Jogos</h2>
      
      <div style={listSld}>
        {lista.length === 0 ? (
          <p style={emptyTextSld}>Nenhum jogo salvo no histórico.</p>
        ) : (
          lista.map((jogo, i) => (
            <div key={i} style={itemSld}>
              <span style={indexSld}>Jogo #{i + 1}</span>
              <div style={ballRowSld}>
                {jogo.map((n, j) => (
                  <span key={j} style={miniBallSld}>
                    {n < 10 ? `0${n}` : n}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      
      <button style={btnVoltar} onClick={() => navigate("/")}>
        Voltar para o Início
      </button>
    </div>
  );
}

// Estilos para o Histórico
const historyContainer: CSSProperties = { 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  gap: "20px",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  width: "100%",
  maxWidth: "500px"
};

const titleSld: CSSProperties = {
  fontSize: "24px",
  color: "#333",
  marginBottom: "10px"
};

const listSld: CSSProperties = { 
  display: "flex", 
  flexDirection: "column", 
  gap: "12px", 
  width: "100%",
  maxHeight: "400px",
  overflowY: "auto",
  paddingRight: "5px"
};

const itemSld: CSSProperties = { 
  display: "flex", 
  flexDirection: "column",
  gap: "8px", 
  padding: "15px", 
  backgroundColor: "#f8f9fa", 
  borderRadius: "10px", 
  border: "1px solid #e9ecef",
  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
};

const indexSld: CSSProperties = {
  fontSize: "12px",
  color: "#888",
  fontWeight: "bold",
  textTransform: "uppercase"
};

const ballRowSld: CSSProperties = {
  display: "flex",
  gap: "8px",
  justifyContent: "center"
};

const miniBallSld: CSSProperties = { 
  width: "30px", 
  height: "30px", 
  borderRadius: "50%", 
  backgroundColor: "#2563eb", 
  color: "white", 
  fontSize: "13px", 
  fontWeight: "bold",
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center",
  boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)"
};

const emptyTextSld: CSSProperties = {
  color: "#999",
  fontStyle: "italic",
  textAlign: "center",
  padding: "20px"
};

const btnVoltar: CSSProperties = { 
  border: "none", 
  background: "none", 
  color: "#2563eb", 
  cursor: "pointer", 
  textDecoration: "underline",
  fontWeight: "600",
  fontSize: "16px",
  marginTop: "10px"
};