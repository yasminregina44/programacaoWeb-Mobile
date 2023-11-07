import { useState } from "react"

export default function StatusEntrega() {

const [tarefa, setTarefa]=useState("")

    return (
        <div>
            <button>Mudar tema</button>
            <h1>Status da Entrega</h1>
            <button>Pendente</button>
            <button>Em trânsito</button>
            <button>Entregue</button>
        </div>
    )
}