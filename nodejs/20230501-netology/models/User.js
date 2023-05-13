import { userList } from "../database/database.js";

export class User {
  constructor(name) {
    this.id = userList.at(-1).id + 1 || 0;
    this.name = name;
  }
}
