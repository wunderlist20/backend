# wunderlist-backend

Endpoints

Log In and Registration (in progress)

POST will create a new user and send back a token. Username, password, firstName, lastName are required fields.

POST will log the user in, and send back a token. Username and password required.

Todos
GET https://wunderlist-02.herokuapp.com/api/todos/ will return an array of todos.

GET https://wunderlist-02.herokuapp.com/api/todos/:id will return an object corresponding to the todo at that ID.

POST https://wunderlist-02.herokuapp.com/api/todos/ will add a new todo, and return the created object. title, task and setDate are required fields. user_id, notes, and completed are optional fields.

DEL https://wunderlist-02.herokuapp.com/api/todos/:id will delete the todo at this ID, and return the deleted object.

PUT https://wunderlist-02.herokuapp.com/api/todos/:id will edit the todo at this ID, and return the edited object.
