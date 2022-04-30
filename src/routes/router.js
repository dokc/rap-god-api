var models = require("express-cassandra")
import express from "express"
import { Router } from "express"

let singer_router = Router()

singer_router.use(express.json())

singer_router.post("/:uuid/", (req, res) => {
  let test = new models.instance.Rap({
    video_link: req.body.video_link,
    uuid: req.params.uuid,
    lyrics: req.body.lyrics,
    label: req.body.label,
    singer: req.body.singer,
    miscell_inf: req.body.miscell_inf,
    lyricist_name: req.body.lyricist_name,
  })
  test.save((err) => {
    if (err) {
      console.error(err)
    } else {
      res.send(`${req.params.singer} was saved`)
    }
  })
})

export default singer_router
