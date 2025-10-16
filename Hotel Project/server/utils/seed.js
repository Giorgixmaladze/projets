const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { Room } = require('../model/rooms.model')

dotenv.config()

async function run() {
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) {
    console.error('DATABASE_URL not set in .env')
    process.exit(1)
  }

  await mongoose.connect(dbUrl, { dbName: process.env.DB_NAME || 'Hotel' })
  console.log('Connected to MongoDB (db:', process.env.DB_NAME || 'Hotel', ')')

  const filePath = path.join(__dirname, '..', 'data', 'rooms.json')
  const file = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(file)

  // Map JSON fields to schema
  const docs = data.map(r => ({
    name: r.name,
    RoomType: r.type, // map JSON "type" to schema field "RoomType"
    price: r.price,
    capacity: r.capacity,
    description: r.description,
    amenities: r.amenities,
    image: r.image
  }))

  await Room.deleteMany({})
  await Room.insertMany(docs)
  console.log(`Seeded ${docs.length} rooms`)

  await mongoose.disconnect()
  console.log('Disconnected')
}

run().catch(async (err) => {
  console.error('Seeding error:', err?.message || err)
  try { await mongoose.disconnect() } catch {}
  process.exit(1)
})


