# tecnofit-challenge

Projeto implementado com os frameworks [Cypress](https://www.cypress.io) e [Newman](https://github.com/postmanlabs/newman).

É necessário possuir o [Node.js](https://nodejs.org/en/download/) instalado na máquina para executá-lo.

Após efetuar o clone do projeto, seguir as instruções abaixo para executar os testes:

1.  Para instalar todas as dependências:
    >     npm install
2.  Para executar os testes em modo visual com o Cypress (ideal para DEBUG):
    >     npm run cy:open
3.  Para executar os testes em modo headless com o Cypress (ideal para CI):
    >     npm run cy:run
4.  Para executar os testes com o Newman:
    >     npm run newman:run
