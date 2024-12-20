import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

export default app;
