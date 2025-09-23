require("dotenv").config(); // ✅ Load .env variables first
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// =====================
// Score Schema & Model
// =====================
const scoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  category: String,
  score: Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model("Score", scoreSchema);

// POST route to save score
app.post("/api/scores", async (req, res) => {
  try {
    const { name, email, category, score, total } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "name and email are required" });
    }

    const newScore = new Score({ name, email, category, score, total });
    const savedScore = await newScore.save();

    console.log("Saved Score:", savedScore);
    res.json(savedScore);
  } catch (err) {
    console.error("Error saving score:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET route to fetch all scores
app.get("/api/scores", async (req, res) => {
  try {
    const scores = await Score.find().sort({ date: -1 });
    console.log("Fetched Scores:", scores);
    res.json(scores);
  } catch (err) {
    console.error("Error fetching scores:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));