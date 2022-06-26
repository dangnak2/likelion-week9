import express from "express";
import Posts from "./posts";

const cors = require('cors');

const app = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000/api/posts',
  credential: true
}

app.use(cors(corsOptions));
app.use("/posts", Posts);

export default app;