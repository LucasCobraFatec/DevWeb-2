import { createContext, useContext, useState } from 'react'
export default function App() {
  return (
    <CountProvider>
      <A />
      <div>
        <B />
        <C />
      </div>
    </CountProvider>
  )
}
interface ContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}
interface ChildrenProps {
  children: React.ReactNode;
}
const CountContext = createContext<ContextProps | null>(null);
function CountProvider({ children }: ChildrenProps) {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>  
  );
}
function A() {
  const { count } = useContext(CountContext) as ContextProps;
  return <h3>Valor: {count}</h3>;
}
function B() {
  const { increment } = useContext(CountContext) as ContextProps;
  return <button onClick={increment}>Aumentar</button>;
}
function C() {
  const { decrement } = useContext(CountContext) as ContextProps;
  return <button onClick={decrement}>Diminuir</button>;
}