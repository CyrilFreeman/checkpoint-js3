const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `select * from  ${this.table} where name = ?`,
      [name]
    );
  }

  update(boat) {
    console.error(boat);
    return this.connection.query(
      `update ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
  }
}
module.exports = BoatManager;
