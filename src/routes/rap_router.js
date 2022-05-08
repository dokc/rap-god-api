var models = require("express-cassandra")
import { uuidFromString } from "express-cassandra"
import express from "express"
import { Router } from "express"

let rap_router = Router()

rap_router.use(express.json())

rap_router.get("/:uuid/", (req, res) => {
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

rap_router.post("/:uuid/", (req, res) => {
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

rap_router.put("/:uuid/", (req, res) => {
  let update_objets = {
    video_link: req.body.video_link,
    lyrics: req.body.lyrics,
    label: req.body.label,
    date_of_release: req.body.date_of_release,
    singer: req.body.singer,
    miscell_inf: req.body.miscell_inf,
    lyricist_name: req.body.lyricist_name,
  }
  models.instance.Rap.update(
    { Unique_Id: uuidFromString(req.params.uuid) },
    update_objets,
    (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log("Data was updated")
        res.send(`Data was updated ${req.params.uuid}`)
      }
    }
  )
})

rap_router.delete("/:uuid/", (req, res) => {
  models.instance.Rap.delete(
    { Unique_Id: uuidFromString(req.params.uuid) },
    (err, data) => {
      if (err) {
        console.error(err)
      } else {
        console.log("The data was deleted")
        res.send(`Data was deleted ${req.params.uuid}`)
      }
    }
  )
})


export default rap_router
