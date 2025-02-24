import { Db, MongoClient } from 'mongodb';

const dbName = 'test';
const dbUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@database:27017/${dbName}?authSource=admin`;
const mongoClient = new MongoClient(dbUrl);

const createSampleDocumentIfNotExist = async (db: Db) => {
  const collection = db.collection('documents');
  const existingSampleDocument = await collection.findOne({ content: 'test' });

  if (!existingSampleDocument) {
    console.log('Sample database and sample element not found. Creating...');
    await collection.insertOne({ content: 'test' });
    console.log('Sample database and sample element created ✔️');
  } else {
    console.log(
      'Sample database and sample element already exist. Skipping...'
    );
  }
};

export const connectDb = async () => {
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db('test');
  await createSampleDocumentIfNotExist(db);
  return db;
};
