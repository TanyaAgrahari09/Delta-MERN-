import { faker } from "@faker-js/faker";
import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "_0909@mysql",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


// Inserting new data
let q = "INSERT INTO user (id , username , email , password) VALUES ?";

let data = [];
for(let i =1; i<=100; i++){
  data.push(getRandomUser()); // Array having fake data of 100 users
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();


