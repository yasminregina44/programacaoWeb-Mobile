import { useState } from "react"

export default function ToDo() {

    const [lista, setLista] = useState([])
    const [tarefa, setTarefa] = useState("")

    const enterKey = (event) => {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    };

    const adicionarTarefa = () => {
        if (tarefa.trim() != "") {
            setLista([...lista, tarefa]);
            setTarefa("");
        }
    };

    const mudarTema=()=>{
        
    }

    return (
        <div>
            <button>Mudar tema</button>
            <h1>Lista de Tarefas</h1>
            <input type="text" placeholder="Digite sua tarefa aqui" value={tarefa} onInput={event => setTarefa(event.target.value)} onKeyPress={enterKey} />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {
                    lista.map((nome, i) => (
                        <li key={i}>
                            <p>{nome}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}