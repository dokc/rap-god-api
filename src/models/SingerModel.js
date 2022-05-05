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
<<<<<<< HEAD
=======

>>>>>>> 4103f3a0b7e3bf7654128d6fc7aeb7c855440fb7
