const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// weather API route
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  const API_KEY = "162f98b072fcc413d0aa1f77380ac6e6";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "City not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
