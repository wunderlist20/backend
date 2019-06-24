  const fs = require("fs");
  const faker = require("faker");
  const bcrypt = require("bcryptjs");
  const fakeUsers = require("../dummyData/fakeUsers")["users"];
  
  // const createFakeUser = () => ({
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   username: faker.internet.userName(),
  //   password: faker.internet.password()
  // }); 
  
  exports.seed = function(knex, Promise) {
    // const fakeUsers = [];
  
    // for (let i = 0; i < 30; i++) {
    //   fakeUsers.push(createFakeUser());
    // }
  
    // fs.writeFileSync(
    //   "./data/dummyData/fakeUsers.json",
    //   JSON.stringify({ users: fakeUsers })
    // ); 
  
    fakeUsers.map(user => {
      user.password = bcrypt.hashSync(user.password, 8);
    });
  
    return knex("users").insert(fakeUsers);
  };
