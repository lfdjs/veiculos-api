# API REST que contém cum CRUD simples com dados de veículos cadastrados

Esta aplicação consiste em uma api simples que realiza o CRUD(CREATE, READ, UPDATE, DELETE) de dados de veículos.

O Banco de dados utilizado para esta aplicação é o SQLite, cujo arquivo encontra-se na raiz da aplicação.

A aplicação ja está totalmente configurada, desta forma para rodar a aplicação basta digitar o seguinte comando no terminal: `npm run dev`. A aplicação está pré-configurada para rodar na porta 3333.

Esta aplicação contém um arquivo que contém um script de testes dos endpoints, que está localizado no caminho `src/test/test.js`.
 
É importante realizar a alteração da variável id no arquivo `test.js` para verificar ids diferentes a cada teste realizado, quando se tratar dos endpoints que exigem o argumento id toda vez ao rodar o script de teste por meio do comando `npm test`.

Esta api também contém uma documentação de todos os endpoints, que pode ser acessada pelo link http://localhost:3333/doc

Para o teste desta api com os dados apresentados em uma aplicação front-end, pode ser utilizada a aplicação desenvolvida com angular, que pode ser encontrada por meio do seguinte link: https://github.com/lfdjs/veiculos-frontend.