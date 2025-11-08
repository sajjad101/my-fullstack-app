import { getDB } from '../utils/mongodb'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDB()

    // Example: Fetch all users and include posts from another collection
    const users = await db.collection('users').aggregate([
      {
        $lookup: {
          from: 'posts',
          localField: '_id',
          foreignField: 'userId',
          as: 'posts'
        }
      }
    ]).toArray()

    return users
  } catch (error) {
    console.error('API Error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users from MongoDB.'
    })
  }
})
