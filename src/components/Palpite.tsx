import { useState, useEffect, useContext, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { LetterContext } from "../contexts/Ctx";

export default function Palpite() {
  const navigate = useNavigate();
  const context = useContext(LetterContext);
  const [jogoAtual, setJogoAtual] = useState<number[]>([]);

  // Lógica para sortear 6 números sem repetir (1 a 60)
  const gerarNovoJogo = () => {
    const novoJogo: number[] = [];
    while (novoJogo.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!novoJogo.includes(num)) {
        novoJogo.push(num);
      }
    }
    // Ordena os números de forma crescente para exibição
    setJogoAtual(novoJogo.sort((a, b) => a - b));
  };

  // Gera o primeiro palpite ao montar o componente
  useEffect(() => {
    gerarNovoJogo();
  }, []);

  const salvarEVoltar = () => {
    if (context && jogoAtual.length === 6) {
      // Adiciona o jogo atual ao array de palpites no contexto global
      context.setPalpites((prev) => [...prev, jogoAtual]);
      navigate("/");
    }
  };

  return (
    <div style={containerSld}>
      <h2 style={titleSld}>O Teu Palpite</h2>
      
      <div style={ballContainerSld}>
        {jogoAtual.map((num, idx) => (
          <div key={idx} style={ballSld}>
            {num}
          </div>
        ))}
      </div>

      <div style={actionSld}>
        <button style={btnActionSld} onClick={gerarNovoJogo}>
          Gerar Outro Jogo
        </button>
        <button style={btnSaveSld} onClick={salvarEVoltar}>
          Salvar e Voltar
        </button>
      </div>
    </div>
  );
}

// Estilos para o componente
const containerSld: CSSProperties = { 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  gap: "20px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

const titleSld: CSSProperties = {
  color: "#444",
  fontSize: "24px",
  fontWeight: "bold"
};

const ballContainerSld: CSSProperties = { 
  display: "flex", 
  gap: "12px", 
  flexWrap: "wrap", 
  justifyContent: "center",
  margin: "20px 0"
};

const ballSld: CSSProperties = {
  width: "55px", 
  height: "55px", 
  borderRadius: "50%", 
  backgroundColor: "#16a34a",
  color: "white", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center",
  fontWeight: "bold", 
  fontSize: "22px", 
  boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
  border: "3px solid #15803d"
};

const actionSld: CSSProperties = { 
  display: "flex", 
  flexDirection: "column", 
  gap: "12px", 
  width: "100%",
  maxWidth: "300px"
};

const btnActionSld: CSSProperties = { 
  padding: "14px", 
  borderRadius: "10px", 
  border: "2px solid #ddd", 
  backgroundColor: "#f9f9f9",
  color: "#333",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background 0.2s"
};

const btnSaveSld: CSSProperties = { 
  padding: "14px", 
  borderRadius: "10px", 
  border: "none", 
  backgroundColor: "#16a34a", 
  color: "white", 
  fontWeight: "bold", 
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(22, 163, 74, 0.3)"
};