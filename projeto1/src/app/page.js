import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Lavínia'
  return (
    <div>
      <h1>Página Principal</h1>
      <p className={styles.paragrafo}>Parágrafo da Página Principal</p>
      <p className={styles.paragrafo}>Autora {nome}</p>
      <Image
      className={styles.imagem}
      src="/images/img.jpg"
      alt="Imagem Praia"
      width={600} 
      height={600} 
      />

    </div>
  );
}