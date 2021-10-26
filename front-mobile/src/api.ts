import axios from "axios";
import { filtroPesquisa, tipoPesquisa } from "./types";

const API_URL= 'http://192.168.15.56:8080';


type Props = {
     filtro: filtroPesquisa;
   }
   

export function fetchPesquisa(){
     return axios.get<tipoPesquisa[]>(`${API_URL}/dadosDesmatamento/filtrar?ano=2004&uf=`);
}