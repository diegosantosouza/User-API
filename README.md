# User-API REST
### Projeto API REST de usuários com CRUD completo

## Project setup
```
npm install
```

### Set you Database credentials
#### path: ./database/connection.js
```
EXEMPLE:
var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '123456',
      database : 'apiusers'
    }
  });

module.exports = knex
```

### Run Node Serve
```
node index.js
```

