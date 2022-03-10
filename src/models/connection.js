import * as cassandra from "express-cassandra";

cassandra.setDirectory(".").bind(
  {
    clientOptions: {
      contactPoints: ["127.0.0.1"],
      localDataCenter: "datacenter1",
      protocolOptions: { port: 9042 },
      keyspace: "mykeyspace",
      queryOptions: { consistency: models.consistencies.one },
      socketOptions: { readTimeout: 60000 },
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
    if (err) throw err;
  }
);
