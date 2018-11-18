---
layout: post
title: "Variáveis e Constantes em Java"
date: 2018-11-17 
image: '/assets/img/'
description: 'Diferença entre variáveis e constantes em Java'
tags: 
- Java
- variaveis
- constantes
- Aprendendo Java
categories: 
- Aprendendo Java
twitter_text: 'Diferença entre variáveis e constantes em Java'
---

&nbsp;
## Diferença entre variáveis e constantes

Fala pessoal, beleza?

Hoje vamos falar sobre a diferença de uma variável para uma constante.

As variáveis são definições que não tem seu valor absoluto, sendo possível modificá-las ao longo do sistema.
Ex:

```
String nome = "João";
nome = "Maria";
```
&nbsp;

Esse código irá funcionar sem nenhum problema, e o resultado final da variável nome será Maria. Porque seu conteúdo foi modificado.


Já a constante, impossibilita que o valor seja alterado ao decorrer do programa. Quando uma constante é definida, ela nasce com um valor e permanece com o mesmo. Ex:

```
final float PI = 3.1416F;
```
&nbsp;


Note que a sintaxe da constante inicia com o **final** antes da definição do tipo da variável.
E se você tentar mudar o valor de PI ao longo do programa, irá receber um erro. 

Resumindo: Variáveis podem mudar, constantes não. ;)

Até a próxima!



