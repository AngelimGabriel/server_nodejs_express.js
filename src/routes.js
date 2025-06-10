import { Router } from "express";
import users from './app/controllers/UsersController';

const routes = new Router();

routes.get("/users", users.index.bind(users));
routes.get("/users/:id", users.show.bind(users));
routes.post("/users", users.create.bind(users));
routes.put("/users/:id", users.update.bind(users));
routes.delete("/users/:id", users.destroy.bind(users));

export default routes;
