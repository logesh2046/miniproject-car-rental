import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Pool } from "pg"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1")
    res.json({ ok: true })
  } catch (e) {
    res.status(500).json({ ok: false, error: "db_error" })
  }
})

app.get("/cars", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM cars ORDER BY id")
    res.json(rows)
  } catch (e) {
    res.status(500).json({ error: "failed_to_fetch_cars" })
  }
})

app.post("/bookings", async (req, res) => {
  const { carId, customerName, pickupDate, returnDate } = req.body || {}
  if (!carId || !customerName || !pickupDate || !returnDate) {
    return res.status(400).json({ error: "missing_fields" })
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO bookings (car_id, customer_name, pickup_date, return_date)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [carId, customerName, pickupDate, returnDate]
    )
    res.status(201).json(rows[0])
  } catch (e) {
    res.status(500).json({ error: "failed_to_create_booking" })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})


