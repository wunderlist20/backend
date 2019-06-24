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

## Register a new user.

    POST /api/auth/register

    ### Parameters

| Name       | Type   | Description                                              |
| ---------- | ------ | -------------------------------------------------------- |
| username   | String | <p>Users username</p>                                       |
| password   | String | <p>Users password</p>                                    |
| firstName  | String | <p>Users firstName </p>                                    |
| lastName   | String | <p>Users lastName </p

**POST** https://wunderlist-02.herokuapp.com/api/auth/register will create a new user and send back a token. Username, password, firstName, lastName are required fields.

## Examples

Register example:

```
axios.post('/api/auth/register', {
    "username": "hermione",
	"password": "granger",
	"firstName": "hermione",
 	"lastName" : "granger"
});
```

### Success Response

Register Success

```

 {
    "message": "Welcome hermione!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsInVzZXJuYW1lIjoiaGVybWlvbmUiLCJpYXQiOjE1NjE0MTU1ODQsImV4cCI6MTU2MjAyMDM4NH0.LQLEDiljVklxF4gZOyNlLJ6SZuM7509Ko5rK_Ql2X4w",
    "userID": 33
}
```

### Error Response

Error Example:

```
ERROR 500
{
    "status": 500,
    "message": "Your use could not be created ${error}."
}
```

## Log a user in.

    POST /api/auth/login

### Parameters

| Name     | Type   | Description                |
| -------- | ------ | -------------------------- |
| username | String | <p>Users username</p> |
| password | String | <p>Users password</p>      |


**POST** https://wunderlist-02.herokuapp.com/api/auth/login will log the user in, and send back a token. Username and password required.

### Examples

Login example:

```
axios.post('/api//auth/login', {
    username:"hermione",
    password: "granger"
});
```

### Success Response

Login Success

```

 {
    "message": "Welcome hermione!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsInVzZXJuYW1lIjoiaGVybWlvbmUiLCJpYXQiOjE1NjE0MTU2OTQsImV4cCI6MTU2MjAyMDQ5NH0.rwTCYJ97VA7IvxT0D2uwY3yHljUr0EPNlKQv-P8HloQ",
    "userID": 33
}
```

### Error Response

Error Example:

```
ERROR 401
{
    "status": 401,
    "message": "Username or password is incorrect"
}
```


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