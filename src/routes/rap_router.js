var models = require("express-cassandra")
import { uuidFromString } from "express-cassandra"
import express from "express"
import { Router } from "express"

let rapRoutes = Router()

rapRoutes.use(express.json())

rapRoutes.get("/:uuid/", (req, res) => {
  models.instance.Rap.find(
    { rap_id: uuidFromString(req.params.uuid) },
    (err, data) => {
      if (err) {
        console.error(err)
      } else {
        res.send(data)
      }
    }
  )
})

rapRoutes.post("/:uuid/", (req, res) => {
  let test = new models.instance.Rap({
    video_link: req.body.video_link,
    lyrics: req.body.lyrics,
    label: req.body.label,
    date_of_release: req.body.date_of_release,
    singer: req.body.singer,
    miscell_inf: req.body.miscell_inf,
    lyricist_name: req.body.lyricist_name,
    rap_id: uuidFromString(req.params.uuid),
  })
  test.save((err) => {
    if (err) {
      console.error(err)
    } else {
      res.send(`${req.body.singer} was saved`)
    }
  })
})

export default rapRoutes
