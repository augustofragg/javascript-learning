/* 
Em desenvolvimento web, requisição (request) e resposta (response) são conceitos fundamentais que fazem parte da 
comunicação entre clientes (geralmente navegadores web) e servidores web. Vamos explorar esses conceitos em detalhes.

Requisição (Request)
Uma requisição é uma mensagem enviada pelo cliente ao servidor solicitando algum recurso ou executando alguma ação. 
A requisição é composta por várias partes, incluindo:

    Método HTTP: Especifica a ação a ser realizada. Os métodos HTTP mais comuns são:

    GET: Solicita a recuperação de um recurso.
    POST: Envia dados ao servidor para criar ou atualizar um recurso.
    PUT: Atualiza um recurso existente com os dados enviados.
    DELETE: Remove um recurso.
    PATCH: Aplica modificações parciais a um recurso.
    URL: O endereço do recurso solicitado.

    Cabeçalhos (Headers): Informações adicionais sobre a requisição, como tipo de conteúdo, autenticação, cookies, etc.

    Corpo da Requisição (Request Body): Dados enviados com a requisição, geralmente usados em métodos como POST e PUT.

Resposta (Response)
Uma resposta é a mensagem enviada pelo servidor ao cliente em resposta a uma requisição. A resposta também é composta por várias partes, incluindo:

    Status Code: Um código numérico que indica o resultado da requisição. Alguns códigos de status comuns são:

    200 OK: A requisição foi bem-sucedida.
    404 Not Found: O recurso solicitado não foi encontrado.
    500 Internal Server Error: Houve um erro no servidor.
    Cabeçalhos (Headers): Informações adicionais sobre a resposta, como tipo de conteúdo, data, etc.

    Corpo da Resposta (Response Body): O conteúdo do recurso solicitado ou uma mensagem de erro.

Resumo
    Requisição (Request): Mensagem enviada pelo cliente ao servidor solicitando um recurso ou executando uma ação. 
    Contém método HTTP, URL, cabeçalhos e, opcionalmente, um corpo de requisição.

    Resposta (Response): Mensagem enviada pelo servidor ao cliente em resposta a uma requisição. Contém código de status, 
    cabeçalhos e um corpo de resposta.
    
    Esses conceitos são essenciais para a comunicação na web e são usados em praticamente todas as interações cliente-servidor.

API
Uma API é uma ferramenta poderosa que permite a interação entre diferentes sistemas de software, promovendo a reutilização de código, a integração de serviços e a 
modularidade de aplicações. Na web, as APIs são fundamentais para a comunicação entre serviços e a construção de aplicações modernas e escaláveis.
*/