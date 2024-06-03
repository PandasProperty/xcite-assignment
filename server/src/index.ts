import express from 'express';
import { getLeaderboard } from './leaderboard.controller';
import cors from 'cors';

const corsOptions = {
  origin: [
    'http://localhost:3000',
  ],
  credentials: false
}

const app = express();
const port = 4000;

app.use(cors(corsOptions))

app.get('/leaderboard', getLeaderboard);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
