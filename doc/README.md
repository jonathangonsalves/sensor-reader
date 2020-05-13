# sensor-reader

Trabalho para a disciplina de Integração e Distribuição de Sistemas

## Como usar

### Arduino

Pode ser utilizado querquer sensor. A saida do primeiro sensor deve de ser conectada na porta A0, e a do segundo na porta A1.

Passe o programa da pasta ```reader/sensor_reader/sensor_reader.ino``` para o Arduino.

Com o Arduino conectado, será possivel ver a leitura dos sensores no visuializador serial da propria IDE. Será retornado o valor do sensor e mais o HASH gerado pelo algoritimo MD5.

### Receptor dos dados

Com o Arduino ja configurado execute o programa ```reader/reader.py```.

> Utilize Python 3

A cada 5 segundos o ```reader.py``` coleta os dados da placa e os salva no arquivo ```final.json```. Mantenha o programa aberto para o arquivo ser atualizado.

### Servidor

Dentro da pasta ```api/```, execute os sequintes comandos:

```sh
npm install
node app.js
```

Com o servidor funcionando, acesse ```http://localhost:8080/```.

Faça o login para ter o acesso a visualisação da Dashboard. Caso você seja o usuario master, aparecera um menu no topo da pagina, ode é possivel escolher cadastrar ou visualizar todos os usuarios.

Caso na hora do login você esqueça a senha, clique no link para recuperar a senha, se o email informado for cadastrado, você recebera um email com a sua senha.

Todas as rotas possuem restrição de aceso. Exeto a home e a rota ```http://localhost:8080/dashboard/data``` que ira retornar os valores dos sensores.

---

Jonathan Gonsalves - 1702927

Leonardo Padilha Guarezi - 1702974
