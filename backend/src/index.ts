import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dns from 'node:dns';
import https from 'https';

dns.setDefaultResultOrder('ipv4first');

const agent = new https.Agent({
  family: 4, // Force IPv4
  keepAlive: true,
  keepAliveMsecs: 3000,
});

https.globalAgent = agent;

import authRouter from './routes/auth'
import promptRouter from './routes/prompts'
const app = express()
const port = 5000;

app.use(express.json());
app.use(cors());


app.use("/auth", authRouter)
app.use("/prompts", promptRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


