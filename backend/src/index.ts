import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth'
import promptRouter from './routes/prompts'
const app = express()
const port = 3000 ; 

app.use(express.json()) ; 
app.use(cors()) ; 


app.use("/auth" , authRouter)
app.use("/prompts" , promptRouter) ; 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


