const fs = require("fs");
const faker = require("faker");
const fakeTodos = require("../dummyData/fakeTodos")["todos"];

// const createFakeTodo = () => ({
//   title: faker.commerce.department(),
//   task: faker.commerce.productName(),
//   notes: faker.lorem.paragraph(),
//   setDate: faker.date.weekday(),
//   completed: faker.random.boolean(),
// }); 

exports.seed = function(knex, Promise) {
  // const fakeTodos = [];

  // for (let i = 1; i <= 30; i++) {
  //   const fakeTodo = createFakeTodo();
  //   fakeTodo.user_id = i;
  //   fakeTodos.push(fakeTodo);
  // }

  // fs.writeFileSync(
  //   "./data/dummyData/fakeTodos.json",
  //   JSON.stringify({ todos: fakeTodos })
  // ); 

  return knex("todos").insert(fakeTodos);
};
