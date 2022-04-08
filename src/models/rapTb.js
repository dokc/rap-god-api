export default {
  fields: {
      video_link :     "text",
      lyrics     :     "text",
      label      :     "text",
      date_of_release :"date",
      singer	   :   "text",
      miscell_inf  :   "text",
      lyricist_name :  "text", // creator of rap
      rap_id :         "uuid", // unique for each rap	
      },
  key: [["rap_id"],"lyricist_name"]
}
