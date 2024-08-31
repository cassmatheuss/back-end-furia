# Back-end do projeto para FURIA
Este repositório mostra um back-end simples que pode ser integrado à landing page, na qual salva os dados do formulário em um banco de dados. Não possui integração com a landing page. Apenas de demonstração.

# Tecnologias utilizadas
Foi utilizado Typescript no Nestjs, na qual é um framework muito bom para construção de aplicações em clean architecture.

# Serviço hospedado
O serviço está funcionando em https://back-end-furia.onrender.com, e pode parar de funcionar em pouco tempo, pois está utilizando o plano gratuito.

# Rotas
Para utilizar o app, é possível fazer as seguintes requisições:

GET - /emails - QUERY PARAMS: size, page -  lista todos os emails

GET - /emails/{id} - lista um email em específico

POST - /emails - BODY: {name: "nome", email: "email", message: "mensagem"} - adiciona dados a lista