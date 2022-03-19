import { setDirectory, consistencies } from "express-cassandra"

setDirectory(__dirname + "/models").bind(
  {
    clientOptions: {
      contactPoints: ["127.0.0.1"],
      localDataCenter: "datacenter1",
      protocolOptions: { port: 9042 },
      keyspace: "CassTest",
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
  function (err) {
    if (err) throw err
    else {
      console.log("Database successfully connected at port 9042")
    }
  }
)
