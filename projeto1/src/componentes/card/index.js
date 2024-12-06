import styles from './card.module.css'

export default function Card({nome, sobrenome, idade}) {
    return (
        <div className={styles.div}>
            <h2>{nome}</h2>
            <p>{sobrenome}</p>
            <p>{idade}</p>
        </div>
    )
}