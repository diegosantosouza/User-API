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
### Routes
```
GET '/', Welcome;
POST '/user', params{ STRING name, STRING email, STRING password}, Create new User;
POST '/recoverpassword', params{ STRING email}, Password recovery;
POST '/changepassword', params{ STRING token, STRING password}, Change password;
POST '/login', params{ STRING email, STRING password}, Login;

### Auth routes
GET '/user', List all users;
GET '/user/:id', params{INT id}, Find User by id;
PUT '/user', params{ INT id, STRING name, STRING email, INT role}, Edit User;
DELETE '/user/:id', params{INT id}, Remove User;
```
