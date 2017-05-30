"use strict";

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("classifieds").del().then(() => {
    // Inserts seed entries
    return knex("classifieds").insert([
      {
        id: 1,
        title: "Dessert Classic",
        description: "I got lucky and found it, and decided to charge 10x what it was worth.",
        price: 600,
        item_image: "http://thefatherstable.com/wp-content/uploads/2014/03/4-oz-Strawberry-Cheesecake.jpg",
        created_at: new Date("2017-05-26 14:26:16 UTC"),
        updated_at: new Date("2017-06-26 18:26:16 UTC")
      }, {
        id: 2,
        title: "A Stuffed Toy?",
        description: "Simply adorable and great for cuddling.",
        price: 999,
        item_image: "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg",
        created_at: new Date("2009-03-18 14:26:16 UTC"),
        updated_at: new Date("2009-03-18 14:26:16 UTC")
      }, {
        id: 3,
        title: "My MacBook",
        description: "It's from Apple.",
        price: 100000,
        item_image: "https://cdn.macrumors.com/article-new/2014/11/macbook_2016_roundup_header.jpg",
        created_at: new Date("2009-03-18 14:26:16 UTC"),
        updated_at: new Date("2009-03-18 14:26:16 UTC")
      }, {
        id: 4,
        title: "The Rose",
        description: "It's just paper. Quite difficult to make...",
        price: 10,
        item_image: "https://origamicaravan.files.wordpress.com/2011/10/auction_kawasaki_rose.jpg",
        created_at: new Date("1998-03-18 14:26:16 UTC"),
        updated_at: new Date("2000-03-18 14:26:16 UTC")
      }
    ])
  }).then(() => {
    return knex.raw("SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds));")
  })
}
