/// Initialize the server
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API endpoint
app.get("/", async (req, res) => {
  try {
    res.json({ message: `Hello from the server at port ${port}!` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
