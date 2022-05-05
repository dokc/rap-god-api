let value = {
  fields: {
    video_link: "text",
    lyrics: "text",
    label: "text",
    date_of_release: {
      type: "timestamp",
      default: { $db_function: "toTimestamp(now())" },
    },
    singer: "text",
    miscell_inf: "text",
    lyricist_name: "text", // creator of rap
    rap_id: {
      type: "uuid",
      default: { $db_function: "uuid()" },
    }, // unique for each rap
  },
  key: ["rap_id", "lyricist_name"],
}

export default value
