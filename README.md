# wunderlist-backend

## Dependencies Used

- Node
- Express
- PostgreSQL (Production)
- SQLite3 (Development)
- Knex
- Knex Cleaner
- Bcryptjs
- Jsonwebtoken
- Cors
- Helmet
- Dotenv
- Faker
- Nodemon (Development)
- Cross-Env (Development)
- Jest (Development)
- Supertest (Development)

## Endpoints

### Log In and Registration


**POST** https://wunderlist-02.herokuapp.com/api/auth/register will create a new user and send back a token. Username, password, firstName, lastName are required fields.

**POST** https://wunderlist-02.herokuapp.com/api/auth/login will log the user in, and send back a token. Username and password required.


### Todos
(protected route, requires login)

**GET** https://wunderlist-02.herokuapp.com/api/todos/ will return an array of todos.

**GET** https://wunderlist-02.herokuapp.com/api/todos/:id will return an object corresponding to the todo at that ID.

**POST** https://wunderlist-02.herokuapp.com/api/todos/ will add a new todo, and return the created object. title, task and setDate are required fields. user_id, notes, and completed are optional fields.

**DEL** https://wunderlist-02.herokuapp.com/api/todos/:id will delete the todo at this ID, and return the deleted object.

**PUT** https://wunderlist-02.herokuapp.com/api/todos/:id will edit the todo at this ID, and return the edited object.


### Users
(protected route, requires login)

GET  https://wunderlist-02.herokuapp.com/api/users/:id allows a user to view their specific profile by id

PUT  https://wunderlist-02.herokuapp.com/api/users/:id allows a user to edit their specific profile

DELETE https://wunderlist-02.herokuapp.com/api/users/:id allows a user to delete their specific profile


**If you are running the project locally, every endpoint here is the same, but the heroku URL is replaced with `http://localhost:4000/`. For example, `GET` `http://localhost:4000/api/todos` will return an array of todos.**