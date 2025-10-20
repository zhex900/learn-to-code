import crypto from "crypto";
import { faker } from "@faker-js/faker";
import fs from "fs";

const users = {
  list: [],
  fileName: "users.json",
  // --- Methods ---
  getUsers: () => list,
  save(path = ".") {
    const json = JSON.stringify(this.list, null, 2);
    fs.writeFileSync(`${path}/${this.fileName}`, json);
    console.log("✅ User saved to " + this.fileName);
  },
  load(path = ".") {
    if (fs.existsSync(`${path}/${this.fileName}`)) {
      const data = fs.readFileSync(`${path}/${this.fileName}`, "utf-8");
      this.list = JSON.parse(data);
      console.log(`📂 Loaded ${this.list.length} users from file.`);
    } else {
      this.list = [];
      console.log("📁 No users file found, starting fresh.");
    }
  },
  add(user) {
    this.list.push(user);
    console.log(`✅ Added user: ${user.profile.firstName}`);
  },

  findUserByEmail(email) {},

  updateTheme(id, theme) {},

  logUserActivity(id) {},

  printUserSummary() {},
};

function randomId() {
  // generate a hash for id
  return crypto.randomBytes(8).toString("hex"); // 16 chars
}

// {
//   id: 1,
//   profile: {
//     name: "Jake He",
//     age: 30,
//     contact: {
//       email: "jake@example.com",
//       phone: "+61 400 123 456",
//     },
//   },
//   role: "admin",
//   settings: {
//     theme: "dark",
//     language: "en",
//   },
//   activity: {
//     lastLogin: "2025-10-20T10:00:00Z",
//     loginCount: 120,
//   },
// },
function generateUsers(numberOfUsers = 10) {
  for (let index = 0; index < numberOfUsers; index++) {
    users.add({
      id: randomId(),
      profile: {
        firstName: faker.person.firstName(),
        lastName: faker.animal.bear(),
        age: faker.number.int(10, 60),
        contact: {
          email: "",
          phone: "",
        },
        role: "admin",
      },
    });
  }
}
const main = () => {
  const args = process.argv.slice(2); // skip 'node' and script name
  const command = args[0];
  switch (command) {
    case "load":
      users.load();
      console.log(JSON.stringify(users, null, 2));
      break;
    case "generate":
      generateUsers();
      users.save();
      break;
    default:
      console.log("unknown commond", command);
      break;
  }
};

main();
