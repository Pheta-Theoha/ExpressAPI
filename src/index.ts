import express, { Application, Request, Response } from "express";
import morgan from "morgan"
import Router from "./routes";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 8000

const app: Application = express();
const swaggerSpec = require('./swagger')

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

const swaggerDocument = require("./swagger.json");

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    }),
);

app.use(Router)

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});