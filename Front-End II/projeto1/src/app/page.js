//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Lavínia'
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Parágrafo da Página Principal</p>
      <p>Autora {nome}</p>
    </div>
  );
}