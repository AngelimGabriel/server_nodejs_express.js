import app from "./app.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://192.168.0.2:5173" }));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`servidor esta rodando na porta ${PORT}`);
});
