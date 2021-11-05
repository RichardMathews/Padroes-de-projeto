# Abstract Factory

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

## Aplicabilidade

**Use o padrão Abstract Factory quando:**

-   um sistema deve ser independente de como seus produtos são criados, compostos ou representados
-   um sistema deve ser configurado como um produto de família de múltiplos produtos
-   uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição
-   você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações

## Consequências


**Bom:**

-   Os produtos sempre serão compatíveis entre si
-   Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos
-   Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos

**Ruim:**

-   Muitas classes e maior complexidade será introduzida no código
