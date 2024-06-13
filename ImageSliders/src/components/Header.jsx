import { useContext } from "react";
import { ExContext } from "../store/Example-context";
export default function Header() {
  const refContext = useContext(ExContext);
  return <h1 className="title">{refContext.count}</h1>;
}
