import { Api } from "../providers"
import { iJogos } from "../interfaces";

const getJogos = async () => Api.get<iJogos[]>('/jogos');

export const allServices = {
    getJogos,
}