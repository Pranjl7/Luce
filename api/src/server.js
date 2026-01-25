import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import publicRoutes from './routes/publicRoutes.js';
import userRoutes from './routes/userRoutes.js';
import contentRoutes from './routes/contentRoutes.js';

const port = process.env.PORT || 5000;
const app = express();

// cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

// db
import connectdb from './config/mongodb.config.js';

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Hello Luce!',
  });
});

// routes
app.use('/api/v1/home', publicRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/content', contentRoutes);

// start server
(async () => {
  await connectdb();
  app.listen(port, () => console.log(`Server Running at http://localhost:${port}`));
})();
