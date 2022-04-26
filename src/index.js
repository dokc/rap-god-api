import express from "express"
import helmet from "helmet"

const app = express()

const port = 3000

app.get("env")
// Using Helmet for CORS and other cross-origin security policy
app.use(
  helmet({
    contentSecurityPolicy: false,
    objectSrc: [`${port}`],
  })
)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app
