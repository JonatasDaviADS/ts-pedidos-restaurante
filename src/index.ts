import { IItemCardapio, IPedido } from "./tipos"; // os moldes
import { adicionarItem, calcularTotal } from "./pedido"; // as regras

//  === Itens do cardápio (cada um segue o molde IItemCardapio) === 
const refrigerante: IItemCardapio = { id: 1, nome: "Refrigerante", preco: 6.5, categoria: "bebida" };
const lasanha: IItemCardapio = { id: 2, nome: "Lasanha", preco: 42.9, categoria: "prato_principal" };
const pudim: IItemCardapio = { id: 3, nome: "Pudim", preco: 12, categoria: "sobremesa" }


// === Pedido aberto (com observação que é opcional) === 
const pedido1: IPedido = { id: 101, cliente: "Ana", itens: [refrigerante, lasanha], status: "aberto", observacoes: "Sem cebola" };

console.log("=== Teste 1: total sem desconto ==");
console.log("Total:", calcularTotal(pedido1));

console.log("=== Teste 2: total com 10% de desconto ===");
console.log("Total:", calcularTotal(pedido1, 10));

console.log("=== Teste 3: cupom inválido (150%)===");
console.log("Total:", calcularTotal(pedido1, 150));

console.log("=== Teste 4: adicionar item em pedido aberto ===");
adicionarItem(pedido1, pudim);
console.log("Total:", calcularTotal(pedido1));

//  === Pedido pago (sem observação: o campo é opcional) ===
const pedido2: IPedido = { id: 102, cliente: "Bruno", itens: [lasanha], status: "pago" };
console.log("=== Teste 5: adicionar item em pedido pago ===");
adicionarItem(pedido2, pudim);

const pedido3: IPedido = { id: 103, cliente: "Carla", itens: [lasanha, pudim], status: "cancelado" };
console.log("=== Teste 6: total de pedido cancelado ===");
console.log("Total:", calcularTotal(pedido3, 10));