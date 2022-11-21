# Carrinho de Compras Distribuído com Node.js e Redis

Aplicação web de exemplo em Node.js que armazena um carrinho de compras em um servidor [Redis](http://redis.io)
usando o módulo [redis](https://www.npmjs.com/package/redis). 

## Criando servidor Redis com Docker

Tendo o Docker instalado, um servidor Redis
que não persiste os dados (apenas armazena em memória)
pode ser iniciado sem qualquer configuração com:

```bash
docker run --name some-redis -d redis
```

Isto vai baixar e iniciar um container `redis` no Docker com 
o nome de `some-redis`. Este é o nome DNS que será usado para acessar o servidor
Redis.

O conteiner `redis` é baixado diretamente do site Docker Hub. Mais informações sobre o conteiner podem ser obtidas em https://hub.docker.com/_/redis. A página inclusive mostra como é fácil iniciar o servidor para persistir os dados.

## Configurando e iniciando projeto

- Copie o arquivo [.env.dist](.env.dist) e renomeie a cópia para `.env`. 
  As configurações no arquivo estão exatamente iguais às configurações padrões
  do container redis criado com o comando acima. 
- Inicia o servidor node com `npm start`

