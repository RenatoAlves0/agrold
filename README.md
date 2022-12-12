
# AgroLD

A AgroLD é uma uma linguagem de design de Digital Twin, construída com enfoque na área agrícola a partir do Estudo de Caso do Plante Box (descrito no Trabalho de Conclusão de Curso disponível em http://biblioteca.ifce.edu.br/index.asp?codigo_sophia=98979).

Ela está definida em JSON e é capaz de representar dispositivos agrícolas similares ao Plante Box em cenários de IoT.

A AgroLD é capaz de descrever 6 tipos de informação a respeito de um Dispositivo Físico de IoT a ser usado em um projeto de Digital Twin:

1. Informações Básicas: podem detalhar informações técnicas e metadados a respeito da Entidade Física, tais como modelo, nome, número de série, fabricante e data de fabricação, versão do firmware padrão, dentre outras.
    
2. Atuadores: podem conter dados sobre o nome e tipo do atuador, bem como funções padrões a ele atreladas, como ligar, desligar, girar 90° à direita etc.
    
3. Sensores: podem englobar detalhes sobre o nome e tipo do sensor, bem como funções padrões a ele atreladas, como ligar, desligar, ler temperatura ambiente etc.
    
4. Recursos de Hardware: compreende a descrição de outros recursos de hardware e suas características pertinentes à aplicação como, por exemplo, bateria (capacidade máxima, valor atual), memória (tipo, capacidade), processador (tipo, clock, núcleos) etc.
    
5. Conectividade: inclui informações sobre recursos de hardware relativos à conectividade e rede, como Wi-Fi (protocolo, tipo de antena), Bluetooth (versão, alcance), dentre outros.
    
6. Recursos Lógicos: responsáveis por descrever as funções e métodos relativos aos componentes anteriores, ou até mesmo relativos à comunicação com componentes externos.