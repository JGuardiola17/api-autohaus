/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes/router';
import { cors } from './middlewares/cors';

const { MONGODB, PORT } = process.env;

const app = express();

app.use(express.json());

// Mongo connect
const mongoConnect = async () => {
  await mongoose
    .connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(`Unable to connect to db: ${MONGODB}`, err);
    });

  app.use(cors);

  // app.use((err, req, res) => {
  //   res.status(err.statusCode || 500).json({ error: err.message || 'Internal error' });
  // });
  // Use router
  app.use('/api', router);

  app.all('*', (req, res) => {
    res.status(404).send('NOT FOUND');
  });

  app.listen(PORT, () => console.log(`APP LISTENING ON PORT: ${PORT}`));
};

mongoConnect();
