import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import authRoutes from "./routes/authRoute"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
