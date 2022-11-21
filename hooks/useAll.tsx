import { useCallback, useState } from "react"
import { iJogos } from "../interfaces"
import { allServices } from "../services"

export const useJogos = () => {
    const [tasks, setTasks] = useState<iJogos[]>()

    const getJogos = useCallback(async () => {
        const {status, data} = await allServices.getJogos();

        if (status != 200) throw new Error('Erro ao buscar jogos');

        setTasks(data);      
    }, [
        // Sem repetiçoes
    ])

    return {
        tasks,
        getJogos,  
    }
}