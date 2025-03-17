import mongoose from 'mongoose'
import env from './env'
import { ISession, MongoDBAdapter } from '@grammyjs/storage-mongodb'

export async function connectDb() {
  try {
    await mongoose.connect(env.MONGO)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

export function storageAdapter() {
  const db = mongoose.connection.db
  if (!db) {
    throw new Error('MongoDB connection not initialized')
  }

  const collection = db.collection<ISession>('sessions')
  return new MongoDBAdapter({
    collection,
  })
}
