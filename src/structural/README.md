# Composite

Compor objetos em estruturas de árvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

Observação:  **partes**  são objetos que formam a estrutura (as partes da estrutura);  **todo**  é a estrutura inteira que é formada por várias partes.

## Aplicabilidade

**Use o padrão Composite quando:**

-   sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estruturas do tipo árvore
-   você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira

## Consequências

**Bom:**

-   É muito fácil criar objetos complexos por composição
-   É fácil gerar uma hierarquia de objetos
-   É fácil usar polimorfismo e recursão
-   É fácil adicionar novos tipos de elementos na estrutura (OCP)

**Ruim:**

-   Dependendo da estrutura, pode quebrar o princípio da segregação de interface (ISP). Objetos do tipo "Leaf" (folha) tendem a ter métodos que não usam ou não fazem nada
