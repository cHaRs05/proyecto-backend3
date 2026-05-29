import express from 'express';
import adoptionRouter from './routes/adoption.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/adoptions', adoptionRouter);

const PORT = process.env.PORT || 8080;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Servidor ejecutandose en el puerto ${PORT}`));
}

export default app;