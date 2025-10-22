export class Person {
  constructor(firstName, lastName, id, age, email, phone, role) {
    this.id = id;
    this.profile = {
      firstName,
      lastName,
      age,
      contact: {
        email,
        phone,
      },
      role,
    };
  }
}
