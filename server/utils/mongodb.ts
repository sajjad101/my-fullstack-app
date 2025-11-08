import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mydatabase'

// Use a global cached client to prevent re-connecting on every request
let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri)
  globalThis._mongoClientPromise = client.connect()
}

clientPromise = globalThis._mongoClientPromise

export async function getDB() {
  const client = await clientPromise
  return client.db() // defaults to the database from the URI
}
