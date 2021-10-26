export type tipoPesquisa = {
    id: number;
    ano: string;
    uf: string;
    areaMetros: number;
    tamanhoForma: number;
    areaForma: number;
}
export type tipoPesquisa1 = {
    ano: string;
    areaForma: number;
    areaMetros: number;
    id: number;
    tamanhoForma: number;
    uf: string;
}
export type filtroPesquisa ={
    uf:string;
    ano:string;
}