import { useContext, type CSSProperties } from "react";
import { LetterContext, type ContextProps } from "../contexts/Ctx";
import Ball from "../Ball";

export default function Display(){
    const {entrada}  = useContext(LetterContext) as ContextProps;
    
    // Extrair números contígüos (ex: "12 34 5" → ["12", "34", "5"]), máximo 6
    const numeros = entrada.trim() ? (entrada.match(/\d+/g) || []).slice(0, 6) : [];

    return <div style={containerSld}>
        {numeros.length === 0 ? (
            <p style={textoSld}>Sem entrada</p>
        ) : (
            numeros.map((numero, index) => <Ball key={index} index={index} value={numero} />)
        )}
    </div>
}

const containerSld: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10px",
    padding: "20px"
};

const textoSld: CSSProperties = {
    fontSize: "18px",
    color: "#666",
    fontWeight: "500"
}