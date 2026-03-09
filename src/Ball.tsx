import { type CSSProperties } from "react";

interface Props {
    value: string;
    index: number;
}

export default function Ball(props: Props){
    return <div style={ballSld}>{props.value}</div>
}

const ballSld: CSSProperties = {
    backgroundColor: "#20B2AA",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer"
}