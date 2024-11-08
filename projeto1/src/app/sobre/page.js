import styles from "./sobre.module.css"

export default function Sobre() {
    return (
        <main>
            <h1>Sobre</h1>
            <p className={styles.paragrafo}>Segunda Página</p>
            <p className= {styles.paragUnico}>Parágrafo Único</p>
        </main>
    )
}