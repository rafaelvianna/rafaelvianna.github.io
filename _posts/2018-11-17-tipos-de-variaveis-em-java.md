---
layout: post
title: "Tipos de variáveis em Java"
date: 2018-11-17 
image: '/assets/img/'
description: 'Como utilizar variáveis em Java'
tags: 
- Java
- variaveis
- Aprendendo Java
categories: 
- Aprendendo Java
twitter_text: 'Como utilizar variáveis em Java'
---

&nbsp;

## Aprendendo os tipos de variáveis em Java

Fala pessoal, beleza?

Estou começando a estudar desenvolvimento android, e a linguagem utilizada para isso é Java. Como não tenho nenhum conhecimento prévio de java, estou realmente aprendendo do zero, e com isso estou fazendo anotações para consultar futuramente quando as dúvidas aparecerem.

Vou compartilhar minhas anotações porque podem ser de alguma utilidade para quem também está no início do desenvolvimento com Java. Vamos lá!

## O que são variáveis
Variáveis são locais que você da um nome e guarda algum tipo de informação ali.

## Tipos de variáveis em Java
Como java é uma linguagem fortemente tipada, nós precisamos definir o tipo da variável antes de criá-la.
Os tipos possíveis são: String, numéricas inteiras, numéricas decimais e boolenas.

A anatomia de definição de uma variável é a seguinte:

```
tipoDaVariavel nomeDaVariavel = conteudoDaVariavel;
```
&nbsp;
### Strings
As variáveis do tipo String, são responsáveis por armazenar qualquer informação do tipo texto. Note que o **seu conteúdo sempre deve ser escrito entre aspas duplas**. 

Veja um exemplo:

```
String nomeDaVariavel = “Meu nome é Rafael”;
```
 &nbsp;
### Números inteiros
O conteúdo das variáveis numéricas **não** são definidos entre aspas. Caso você coloque um número entre aspas, ele será reconhecido como string.

#### byte
As variáveis do tipo byte abrangem números negativos e positivos com o valor entre -128 e 127. 

```
byte numeroByte = 20;
```
&nbsp;
#### short
As variáveis do tipo short abrangem números negativos e positivos com o valor entre -32768 e 32767.  

```
short numeroShort = 32000;
```
&nbsp;
#### int
As variáveis do tipo int sao para números até 2 bilhões. seu limite é: -2147483648 até 2147483647


```
int numeroInt = 500000;
```
&nbsp;
#### long
Numeros realmente gigantescos, armazena qualquer valor.

**Obs**: para determinar que a variável é do tipo long, é preciso colocar o **L** no final do número.


```
long numeroLong = 50000000000L;
```
&nbsp;
### Números decimais
Para definir valores decimais, não utiliza a vírgula e sim o ponto. Ex: 1.50

#### float
O tipo float só conta até 7 números depois da vírgula (que no caso é o ponto).

**obs**: sempre colocar o **f** no final do número.

```
float numeroFloat = 1.1234567f;
```
&nbsp;
#### double
O tipo double conta de 15 a 16 números depois da vírgula (que no caso e o ponto).

```
double numeroDouble = 1.123456789012345;
```
&nbsp;
### Tipo booleano
Variáveis que retornam valores lógicos, sendo eles true ou false.

```
boolean returnTrue = true;
boolean returnFalse = false;
```
&nbsp;

Espero que esse pequeno resumo possa ajudar a galera que assim como eu está iniciando no desenvolvimento com Java.