import { IItemCardapio, IPedido } from "./tipos";

// === REGRA 1: calcular o total === 
// descontoPercentual? -> o ? torna o parâmentro OPCIONAL 
export function calcularTotal(pedido: IPedido, descontoPercentual?: number): number {
    // Pedido cancelado Sempre vale o 0 (primeira coisa a checar)
    if (pedido.status === "cancelado") {
        return 0;
    }

    // soma o preço de cada item
    let total = 0;
    for (const item of pedido.itens) {
        total += item.preco;
    }

    // Só aplica o desconto se ele foi informado
    if (descontoPercentual !== undefined) {
        // Cupom inválido (negativo ou acima de 100%) -> avisa e ignora
        if (descontoPercentual < 0 || descontoPercentual > 100) {
            console.error(`Cupom inválido: ${descontoPercentual}%. Desconto ignorado.`);
        } else {
            total = total - (total * descontoPercentual) / 100;
        }
    }

    // Arredonda para 2 casas decimais (centavos)
    return Math.round(total * 100) / 100;
}

// === REGRA 2: adicionar item === 
// void = a função não devolve nada, só excuta uma ação
export function adicionarItem(pedido: IPedido, novoItem: IItemCardapio): void {
    // o if da a condição se Bloqueia se o pedido já foi pago ou cancelado
    if (pedido.status === "pago" || pedido.status === "cancelado") {
        console.error(`Erro: o pedido ${pedido.id} está "${pedido.status}". Não é possível adicionar "${novoItem.nome}". `);
        return;
    }

    pedido.itens.push(novoItem);
    console.log(`"${novoItem.nome}" adicionado ao pedido ${pedido.id}.`);
}