# App teste Walmart

Certifique-se que já tenha o Node.js instalado, caso não tenha, instale. Para rodar o projeto siga os passos para instalação abaixo:

### Instalação
  - npm install na raiz do projeto
  - grunt compass
  - grunt server
 
### Tarefas existentes no Gruntfile
 - grunt server: sobe o servidor na porta 9001
 - grunt watch: observa se os arquivos scss e js forem alterados
 - grunt jslint: valida a sintaxe dos javascripts. já está contida dentro do grunt watch
 - grunt deploy:irá preparar os assets para produção
 - grunt karma: roda os testes unitários

### Tecnologias usadas e o porque
 - Angularjs: permite que maior agilidade para carregamento de JSON e para construção dos templates e rotas.
 - Nodejs: possibilita a instalação de vários módulos que agilizam o fluxo de trabalho no projeto.
 - Gruntjs: permite automatizar o fluxo de trabalho com a criação de tarefas.
 - Karma / Jasmine: Karma trabalha bem em conjunto com o Angularjse a própria documentação do framework recomenda. O Jasmine é uma boa ferramenta para testes unitários.
 - Sass: permite maior agilidade na hora de escrever os estilos, permitindo minificar e concatenar os arquivos para produção, mas mantendo eles separados para o desenvolvimento