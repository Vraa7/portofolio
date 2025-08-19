const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// kasih akses ke folder public
app.use(express.static(path.join(__dirname, "public")));

// route utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
