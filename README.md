# Teste - Mobile Devs

## Dev Mobile ReactNative

Acrescentei uma breve descrição do método usado para resolver o desafio e os passos mais importantes para conseguir executar o projecto. 


---------------Descrição:---------------

Para o tratamento dos dados foi usada uma base de dados não relacional, desenvolvida em json.

---------------Passos para executar o projecto:---------------

1-Comece por instalar as dependências executando o comando "npm install"

NOTA: caso esteja a faltar a dependência do json-server, basta executar o comando "npm install -g json-server"



2-Deve verificar se os ips colocados nas funções handleCadastro, handleEliminar, fetchData e no componente package.json são os mesmos que se encontram na sua máquina. 

ip: 192.168.1.7

Se for diferente, deve alterar os ips das funções e do componente package.json para o ip da sua máquina.

NOTA: a função handleCadastro encontra-se no componente Cadastro.js  da view, a função handleEliminar encontra-se no componente Apresentação.js, e no componente package.json verifique nos scripts o "task": "json-server --watch ./backend/db.json --host 192.168.1.7 --port 3001".


3-Execute primeiro o back-end:

  3.1-Entrando na pasta backend  (cd backend)

  3.2-Digitando o comando "npm run task"


4-Execute o front-end com outro terminal: 

    4.1-Digitando o comando "npm start"



Boa sorte! Nosso TIME te aguarda... 👍

Bulir. Fácil, rápido e seguro
