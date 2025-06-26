import express from "express";
import routes from "./routes.js";
import cors from "cors";

// import "./database";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors({ origin: "http://192.168.0.2:5173" }));
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
