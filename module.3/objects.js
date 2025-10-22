import { faker } from "@faker-js/faker";
import { Person } from "./Person.js";
import { Users } from "./Users.js";

function generateUsers(users, numberOfUsers = 5) {
  for (let index = 0; index < numberOfUsers; index++) {
    const firstName = faker.person.firstName();
    const lastName = faker.animal.horse();
    const username =
      `${firstName}.${lastName.replace(/\s/g, "")}`.toLowerCase();

    const u = new Person(
      //
      faker.person.firstName(),
      //
      faker.animal.horse(),
      //
      randomId(),
      //age,
      faker.number.int(10, 60),
      //  email,
      `${username}@${faker.internet.domainName()}`,
      //  phone,
      faker.phone.number({ style: "international" }),
      //  role
      "admin"
    );

    users.add(u);
  }
}
const main = () => {
  const args = process.argv.slice(2); // skip 'node' and script name
  const command = args[0];

  const users = new Users();
  const admins = new Users();

  switch (command) {
    case "load":
      users.load();
      //   users.printUsers();
      users.list = [];
      users.bob = "bob";
      console.log(users);
      break;
    case "generate":
      generateUsers(users);
      users.save();
      break;
    default:
      console.log("unknown commond", command);
      break;
  }
};

main();
