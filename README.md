## Sistema de Pedidos - TypeScript estrito ("strict": true) brechas fechadas e nos obriga a deixar tudo explícito. 

Recriação de um script legado em JavaScript que somava cotas de pedidos, agora com tipagem estrita para evitar erros de digotação de status e cálculos inválidos. 

## Abaixo temos conceitos usados
| Conceito | Onde | 
|---|---|
| Tipo literal + union (`\|`) | `CategoriaItem`, `StatusPedido`|
| Interface | `IItemCardapio`, `IPedido`| 
| `readonly` | `id` dos itens e pedidos | 
| Campo opcional (`?`) | `observacoes` | 
| Parâmetros opcional | `descontoPercentual?` | 
| `void` | `adicionarItem` | 
| `strict: true` | `tsconfig.json` |

## Regras de negócio
- Pedido `cancelado` -> total sempre `0`.
- Desconto entre 0 e 100% é aplicado; fora disso, o cupom é inválido e ignorado. 
- Não é possível adicionar itens em pedido `pago` ou `cancelado`. 
- Total arredondado para 2 casas decimais.

## Estrutura 
```
.src/
|--- tipos.ts -> tipos e interfaces 
|--- pedido.ts -> regras de négocio 
|--- index.ts -> testes 
```

## Como rodar
```bash
npm install ---> instala o TypeScript 
npm run build ---> compila src/*.ts para dist/*.js
npm start ---> executa os testes 
```

## Resultado esperado 
| Teste | Resultado | 
| --- | --- | 
| Sem desconto | 49.4 |
| 10% de desconto | 44.46 | 
| Cupom inválido (150%) | erro + 49.4 | 
| Item em pedido aberto | adicionado, 61.4 | 
| Item em pedido pago | erro | 
| Pedido cancelado | 0 | 