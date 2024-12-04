import styles from "../listas/lista.module.css";

export default function Lista() {
    const nomes = ['Lavínia', 'Júlia', 'Sofia', 'Maria Eduarda', 'Letícia']
    const nomesObj = [
        {
            id: 1,
            nome: 'Lavínia'
        },

        {
            id: 2,
            nome: 'Júlia'
        },

        {
            id: 3,
            nome: 'Sofia'
        },

        {
            id: 4,
            nome: 'Maria Eduarda'
        },

        {
            id: 5,
            nome: 'Letícia'
        }
    ]

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<h1 className={styles.listas}>Lista Nomes</h1>
            {/* <p>{nomesObj[0].nome}</p> */}
            <h3 className={styles.h3}>Nomes</h3>
            <ul>
                {nomes.map((nome, i) => (
                    <li key={i}>{i + 1} - {nome}</li>
                ))}
            </ul>
            <div>
                <h3 className={styles.h3}>Lista Objetos</h3>
                {nomesObj.map((nomeObj) => (
                    <div key={nomeObj.id}>
                        <h3>{nomeObj.id}</h3>
                        <p>{nomeObj.nome}</p>
                    </div>
                ))}
            </div>
		</div>
	);
}