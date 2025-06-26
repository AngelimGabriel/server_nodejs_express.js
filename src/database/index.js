import { Sequelize } from "sequelize";
import config from "../config/database.js";
import User from "../app/models/User.js";

const models = [User];

class Database {
    constructor() {
        this.connection = new Sequelize(config);
        this.init();
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }
}
export default new Database();
