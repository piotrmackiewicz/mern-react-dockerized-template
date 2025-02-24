import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { connectDb } from './db';

const main = async () => {
  const app: Express = express();

  const db = await connectDb();
  app.use(
    cors({
      origin: 'http://localhost:3000',
    })
  );

  app.get('/test/documents', async (_req: Request, res: Response) => {
    if (db) {
      const collection = db.collection('documents');
      const docs = await collection.find({}).toArray();
      res.status(200).json(docs);
    }
  });

  app.get('/', (_req: Request, res: Response) => {
    res.status(200).json('Hello from the server!!!');
  });

  app.listen(4000, () => {
    console.log(`App is listening on port 4000`);
  });
};

main();
