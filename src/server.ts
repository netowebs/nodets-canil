import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes";

const app = express();
dotenv.config();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));
app.use(mainRoutes);

app.use((req: Request, res: Response) => {
  res.render("pages/404");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
