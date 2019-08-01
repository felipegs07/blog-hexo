---
title: Escrevendo Capítulos
order: 3
date: 2019-07-30 12:00:00
---

O processo de criação de capítulos na documentação é simples. É necessário abrir o terminal no diretório do tema e executar:

```bash
    hexo new chapter "NOME DO CAPÍTULO"
```
Depois disso, dentro da pasta **posts** será criado um arquivo com o nome do capítulo no formado **.md (Markdown)**. Nesse arquivo você deverá colocar o conteúdo do capítulo com a formação de _Markdown_.

Se você não conhece as regras de formatação de _Markdown_ veja [este guia](https://www.markdownguide.org/).

Para selecionar a ordem em que o capítulo aparecerá no menu, é necessário colocar o número correspondente do capítulo. Ele será ordenado de forma crescente, então o 1 será o primeiro e assim por diante.  

Para alterar a ordem é só colocar o número no front matter do capítulo, localizado no topo do arquivo.
```bash
    ---
    title: Escrevendo Capítulos
    order: 3 <= ordem desse capítulo
    ---
```
