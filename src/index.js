var models = require("express-cassandra")
import express from "express"
import helmet from "helmet"
import { setDirectory, consistencies } from "express-cassandra"
import singer_router from "./routes/singer_router"
import rapRoutes from "./routes/rap_router"

const app = express()

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json())

setDirectory(__dirname + "/models").bind(
  {
    clientOptions: {
      contactPoints: ["127.0.0.1"],
      localDataCenter: "datacenter1",
      protocolOptions: { port: 9042 },
      keyspace: "rapLyrics",
      queryOptions: { consistency: consistencies.one },
      socketOptions: { readTimeout: 0 },
    },
    ormOptions: {
      defaultReplicationStrategy: {
        class: "SimpleStrategy",
        replication_factor: 1,
      },
      migration: "safe",
    },
  },
  (err) => {
    if (err) throw err
    else {
      console.log("Database successfully connected at port 9042")
    }
  }
)

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

app.use("/singer", singer_router)
app.use("/rap", rapRoutes)

export default app
