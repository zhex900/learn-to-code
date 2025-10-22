import fs from "fs";

export class Users {
  constructor(list) {
    this.list = [];
    this.fileName = "users.json";
  }

  getUsers = () => {
    return list;
  };

  getById = (id) => {};

  getByLastName(lastName) {}

  findByGender(gender) {}

  save(path = ".") {
    const json = JSON.stringify(this.list, null, 2);
    fs.writeFileSync(`${path}/${this.fileName}`, json);
    console.log("✅ User saved to " + this.fileName);
  }
  load(path = ".") {
    if (fs.existsSync(`${path}/${this.fileName}`)) {
      const data = fs.readFileSync(`${path}/${this.fileName}`, "utf-8");
      this.list = JSON.parse(data);
      console.log(`📂 Loaded ${this.list.length} users from file.`);
    } else {
      this.list = [];
      console.log("📁 No users file found, starting fresh.");
    }
  }
  add(user) {
    this.list.push(user);
    console.log(`✅ Added user: ${user.profile.firstName}`);
  }
  updateUserPhone(id, phone) {}
  findUserByEmail(email) {}

  updateTheme(id, theme) {}

  logUserActivity(id) {}

  printUsers() {
    console.log(this.list);
  }
}
