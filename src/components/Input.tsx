import { useContext, type CSSProperties } from "react";
import { LetterContext, type ContextProps } from "../contexts/Ctx";

export default function Input(){
    const {entrada, setEntrada} = useContext(LetterContext) as ContextProps;

    return <input 
        style={inputSld}
        type="text" 
        placeholder="Digite números..." 
        value={entrada} 
        onChange={(e) => setEntrada(e.target.value)} 
    />
}

const inputSld: CSSProperties = {
    padding: "10px 15px",
    fontSize: "16px",
    border: "2px solid #20B2AA",
    borderRadius: "8px",
    width: "300px",
    outline: "none",
    transition: "border-color 0.3s"
}