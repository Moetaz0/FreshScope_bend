import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import auteurRouter from './routes/auteur.route.js'; // Correct relative path

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to the database successfully"))
  .catch((err) => {
    console.error("Error connecting to the database", err);
    process.exit();
  });

// Define the routes
app.use('/api/articles', auteurRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Export the Express app as a serverless function
export default (req, res) => {
  app(req, res);
};
