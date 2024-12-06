import Card from '@/componentes/card';

export default function Props() {
    const infor = [
        {
            id: 1,
            nome: 'Lavínia',
            sobrenome: 'Stein',
            idade: 16,
        },
        {
            id: 2,
            nome: 'Duda',
            sobrenome: 'Oliveira',
            idade: 17,
        },
        {
            id: 3,
            nome: 'Letícia',
            sobrenome: 'Schmoller',
            idade: 15,
        },

    ]
    return (
        <div>
            <h1>Props</h1>
            <div>
                {infor.map((info) => (
                    <Card 
                    key={info.id}
                    nome={info.nome}
                    sobrenome={info.sobrenome}
                    idade={info.idade}
                    />
                ))}
            </div>
        </div>
    )
}