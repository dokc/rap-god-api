let singers = {
  fields: {
    Singer_name: "text",
    Spotify: "text",
    Age: "smallint",
    Unique_Id: {
      type: "uuid",
      default: { $db_function: "uuid()" },
    },
  },
  key: ["Unique_Id"],
  indexes: ["Singer_name"],
  table_name: "singers",
}

export default singers
