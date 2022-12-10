import { Express } from 'express';
import authRouter from './auth/router';
import productRouter from './products/router';
import categoriesRouter from './categories/router';
import clientsRouter from './client/router';
const router = (app: Express) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", authRouter);
    app.use("/products", productRouter);
    app.use("/categories", categoriesRouter);
    app.use("/clients", clientsRouter);
}

export default router;