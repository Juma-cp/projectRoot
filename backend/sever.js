const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const servicesRoute = require("./routes/services");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// serve frontend static files when in production
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/api/services", servicesRoute);

// basic contact endpoint (in real app, send email or save to DB)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact received:", name, email, message);
  // TODO: integrate email (SendGrid/Mailgun) or DB
  return res.status(200).json({ ok: true, message: "Received" });
});

// fallback to index.html for SPA behavior
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
