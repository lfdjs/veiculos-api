# API REST que contém cum CRUD simples com dados de veículos cadastrados

Esta aplicação consiste em uma api simples que realiza o CRUD(CREATE, READ, UPDATE, DELETE) de dados de veículos.

O Banco de dados utilizado para esta aplicação foi o SQLite, cujo arquivo encontra-se na raiz da aplicação.

A aplicação ja está totalmente configurada, desta forma para rodar a aplicação basta digitar o seguinte comando no terminal: npm run dev

Esta aplicação contém um arquivo que contém um script de testes dos endpoints, que está localiado no caminho src/test/test.js, é importante que toda vez ao rodar o scipt de teste por meio do comando npm test que realize a alteração da variável id para verificar ids diferentes a cada teste realizado, quando se tratar dos endpoints que exigem o argumento id

Esta api também contém uma documentação de todos os endpoints, que pode ser acessada pelo link http://localhost:3333/doc


