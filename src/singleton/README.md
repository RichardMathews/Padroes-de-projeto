Singleton

O Singleton é um padrão de projeto que tem a intenção de resolver dois problemas em uma aplicação:

Garantir que uma classe tenha somente uma instância no programa - isso é muito comum para programas que acessam recursos compartilhados, como bases de dados, sistemas de arquivos, interfaces gráficas, spoolers de impressão, módulos de um programa e mais.

Fornecer um ponto de acesso global para a mesma - isso deixa o singleton muito parecido com variáveis globais, porque temos um único objeto, com acesso global, sendo usado por várias partes da aplicação.

Apesar de ser um dos padrões mais usados na atualidade, requer conhecimento e cuidado ao utilizá-lo. Um programador pode facilmente criar um Singleton que gera problemas de concorrência em um programa.

Consequências

O que é bom ou ruim nos Singletons:

Bom:
Acesso controlado por encapsulamento à instância única;

É possível permitir um número variável de instâncias (pode soar estranho, mas é 
possível criar um Singleton que permite n instâncias de uma classe);

É possível usar thead lock para garantir que duas partes do código não alterem o singleton simultaneamente;

Usa lazy instantiation, ou seja, o Singleton só será instanciado no momento do uso;

Ruim:
É mais difícil de testar;

Viola o princípio da responsabilidade única;

Requer tratamento especial em casos de concorrência;