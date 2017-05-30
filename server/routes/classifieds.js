"use strict";

const express = require("express");
const router = express.Router();
const knex = require("../knex")

//  GET
router.get("/", (req, res, next) => {
  knex("classifieds")
    .select("id", "title", "description", "price", "item_image", "created_at")
    .orderBy("created_at", "desc")
    .then((items) => {
      res.send(items)
    })
})

router.get("/:id", (req, res, next) => {
  let id = req.params.id
  knex("classifieds")
    .where("id", id)
    .select("id", "title", "description", "price", "item_image")
    .then((item) => {
      res.send(item[0])
    })
})

//  POST
router.post("/", (req, res, next) => {
  let newClassified = req.body
  knex("classifieds")
    .returning(["id", "title", "description", "price", "item_image"])
    .insert({
      title: newClassified.title,
      description: newClassified.description,
      price: newClassified.price,
      item_image: newClassified.item_image
    })
    .then((item) => {
      res.send(item[0])
    })
})

//  UPDATE
router.patch("/:id", (req, res, next) => {
  let id = req.params.id
  let updatClassified = req.body
  knex("classifieds")
    .where("id", id)
    .returning(["id", "title", "description", "price", "item_image"])
    .update({
      title: updatClassified.title,
      description: updatClassified.description,
      price: updatClassified.price,
      item_image: updatClassified.item_image
    })
    .then((item) => {
      delete item.created_at
      delete item.updated_at
      res.set('Content-Type', 'application/json')
      res.send(item[0])
    })
})

//  DELETE
router.delete("/:id", (req, res, next) => {
  let id = req.params.id
  knex("classifieds")
    .where("id", id)
    .returning(["id", "title", "description", "price", "item_image"])
    .del()
    .then((item) => {
      res.send(item[0])
    })
})

module.exports = router;
