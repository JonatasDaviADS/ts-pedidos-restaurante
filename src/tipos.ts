// === TIPOS LITERAIS: só aceitam EXATAMENTE estes textos ===
export type CategoriaItem = "bebida" | "prato_principal" | "sobremesa";
export type StatusPedido = "aberto" | "pago" | "cancelado";

// === INTERFACE: o "molde" de um item do cardápio === 
export interface IItemCardapio {
    readonly id: number;
    nome: string;
    preco: number;
    categoria: CategoriaItem;
}

// === INTERFACE: o "modele" de um pedido === 
export interface Ipedido {
    readonly id: number;
    cliente: string;
    itens: IItemCardapio[];
    status: StatusPedido;
    observacoes?: string;
}