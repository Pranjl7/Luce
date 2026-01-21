import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import publicRoutes from './routes/publicRoutes.js';
import userRoutes from './routes/userRoutes.js';
import contentRoutes from './routes/contentRoutes.js';

const port = process.env.PORT || 5000;
const app = express();

// db
import connectdb from './config/mongodb.config.js';

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/home', publicRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/content', contentRoutes);

// start server
(async () => {
  await connectdb();
  app.listen(port, () => console.log(`Server Running at http://localhost:${port}`));
})();
