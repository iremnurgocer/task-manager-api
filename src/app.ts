import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import sequelize from './config/db';

dotenv.config();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('🚀 API Çalışıyor!');
});

// Auth route
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    // Modeldeki değişiklikleri DB'ye uygula
    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`✅ Sunucu ${PORT} portunda çalışıyor...`);
    });
  } catch (err) {
    console.error('Veritabanı bağlantı hatası:', err);
  }
};

start();
