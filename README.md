# O Mistério da Floresta - Jogo de Texto Interativo

Este é um jogo de escolha interativo feito em formato de web app (texto baseado em escolhas). A história acompanha Lucas, um garoto curioso que encontra um bilhete misterioso sobre um monstro gigante habitando a floresta local. O jogador deve tomar decisões que guiarão o destino de Lucas a uma jornada de empatia ou de medo, culminando em finais totalmente diferentes.

## Como Jogar

1. Baixe ou clone os arquivos deste repositório para o seu computador.
2. Certifique-se de manter os três arquivos (index.html, style.css e script.js) na mesma pasta.
3. Dê um duplo clique no arquivo index.html para abri-lo em qualquer navegador web moderno (Chrome, Edge, Firefox, Safari).
4. Leia a história e clique nos botões para tomar suas decisões e avançar no enredo!

## Estrutura do Projeto

O projeto foi modularizado em três partes principais para manter o código limpo e organizado:

*   index.html: Contém a estrutura básica da interface, incluindo o contêiner do texto da narrativa e os botões dinâmicos.
*   style.css: Define o design visual do jogo usando um tema escuro (Dark Mode), fontes serifadas imersivas, responsividade para celulares e efeitos visuais nos botões.
*   script.js: Gerencia a lógica do jogo, contendo a árvore de decisões estruturada em formato de objeto JSON e a função adaptativa que atualiza a tela de acordo com os cliques do usuário.

## Funcionalidades

*   Múltiplas Ramificações: As escolhas iniciais mudam completamente os cenários subsequentes (como explorar uma caverna, seguir cogumelos brilhantes ou preparar itens no celeiro do avô).
*   Sistema de Finais: O jogo possui dois desfechos principais:
    *   Final Bom: Conquistado através de escolhas baseadas em empatia, paciência e coragem.
    *   Final Ruim: Conquistado quando o jogador age movido pelo medo, hostilidade ou agressão.
*   Botão de Reinício: Ao alcançar qualquer um dos finais, um botão dinâmico "Jogar Novamente" é gerado para resetar o estado da história sem a necessidade de atualizar a página manualmente.

## Tecnologias Utilizadas

*   HTML5 (Estrutura)
*   CSS3 (Estilização e Transições)
*   JavaScript Vanilla (Manipulação de DOM e Lógica de Estado)
