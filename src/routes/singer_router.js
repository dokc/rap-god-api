var models = require("express-cassandra")
import { uuidFromString } from "express-cassandra"
import express from "express"
import { Router } from "express"

let singer_router = Router()

singer_router.use(express.json())

singer_router.get("/:uuid/", (req, res) => {
  models.instance.Singer.find(
    { Unique_Id: uuidFromString(req.params.uuid) },
    (err, data) => {
      if (err) {
        console.error(err)
      } else {
        res.send(data)
      }
    }
  )
})

singer_router.post("/:uuid/", (req, res) => {
  let test = new models.instance.Singer({
    Singer_name: req.body.Singer_name,
    Spotify: req.body.Spotify,
    Age: req.body.Age,
    Unique_Id: uuidFromString(req.params.uuid),
  })
  test.save((err) => {
    if (err) {
      console.error(err)
    } else {
      res.send(`${req.body.Singer_name} was saved`)
    }
  })
})

singer_router.put("/:uuid/", (req, res) => {
  let update_objets = {
    Singer_name: req.body.Singer_name,
    Spotify: req.body.Spotify,
    Age: req.body.Age,
  }
  models.instance.Singer.update(
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

singer_router.delete("/:uuid/", (req, res) => {
  models.instance.Singer.delete(
    { Unique_Id: uuidFromString(req.params.uuid) },
    (err, data) => {
      if (err) {
        console.error(err)
      } else {
        console.log("The data was deleted")
        res.send(`Model ${req.params.uuid} was deleted `)
      }
    }
  )
})

export default singer_router
