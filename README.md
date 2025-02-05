Amigo Secreto - Desafio de Lógica de Programação
Este projeto tem como objetivo fortalecer as habilidades de lógica de programação, desenvolvendo um sistema para realizar sorteios de amigo secreto.
O código é escrito em JavaScript e interage com a interface HTML, permitindo adicionar amigos, visualizar a lista de amigos, realizar sorteios e anunciar o amigo secreto de forma automatizada.

Funcionalidades
Adicionar Amigos:

Permite que o usuário adicione amigos à lista de participantes do sorteio.
Realiza uma verificação para garantir que o nome inserido não esteja vazio ou duplicado.
Exibe a lista de amigos atualizada após cada adição.
Ao adicionar um amigo, o nome é anunciado em voz alta.
Exibir Lista de Amigos:

Exibe todos os amigos que foram adicionados na lista de participantes.
Sortear Amigo Secreto:

Realiza o sorteio de um amigo secreto aleatoriamente entre os participantes, sem repetições.
Se todos os amigos já tiverem sido sorteados, o sorteio é reiniciado.
Anuncia o resultado do sorteio em voz alta e exibe-o na tela.
Limpar Campos:

Limpa o campo de input de texto após cada adição de amigo e após o sorteio.
Como Usar
Adicionar Amigo:

Digite o nome de um amigo no campo de entrada e clique no botão para adicionar à lista.
O nome será anunciado em voz alta e a lista será atualizada.
Sortear Amigo Secreto:

Após adicionar pelo menos dois amigos à lista, clique no botão para realizar o sorteio.
O nome do amigo secreto será sorteado aleatoriamente, exibido na tela e anunciado em voz alta.
Reiniciar o Sorteio:

Quando todos os amigos tiverem sido sorteados, a lista será limpa automaticamente e o sorteio poderá ser reiniciado.
Tecnologias Utilizadas
JavaScript: Para a implementação da lógica do sorteio e interatividade.
HTML: Para estruturar a interface.
SpeechSynthesis API: Para anunciar os nomes em voz alta quando um amigo é adicionado ou sorteado.
Estrutura do Código
Variáveis:

amigos: Armazena a lista de amigos cadastrados.
amigosSorteados: Armazena a lista de amigos que já foram sorteados.
Funções Principais:

exibeTextoTela(tag, texto): Exibe o texto na tela na tag especificada.
exibirListaAmigos(): Atualiza a lista de amigos na interface.
adicionarAmigo(): Adiciona um amigo à lista de amigos.
falarNome(nome): Anuncia o nome do amigo adicionado.
exibirResultado(amigoSecretoSorteado): Exibe o resultado do sorteio na tela.
falarAmigoSorteado(amigo): Anuncia o amigo secreto sorteado.
limparCampo(): Limpa o campo de input de texto.
sortearAmigo(): Realiza o sorteio de um amigo secreto.
sorteioSemRepeticao(): Garante que um amigo não seja sorteado mais de uma vez.
limparListaAmigos(): Limpa a lista de amigos e o resultado do sorteio.
Exemplo de Uso
Adicione amigos na lista:

Digite o nome no campo de input e clique em "Adicionar Amigo".
Realize o sorteio:

Quando houver ao menos dois amigos na lista, clique em "Sortear Amigo Secreto" para realizar o sorteio.
O resultado será exibido e o nome do amigo sorteado será anunciado em voz alta.

Contribuições
Sinta-se à vontade para contribuir com melhorias e ajustes para o projeto!
Se você encontrar algum problema ou tiver sugestões, por favor, abra uma issue ou envie um pull request.
