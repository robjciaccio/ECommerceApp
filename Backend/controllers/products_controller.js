const express = 'express'
const multer = require('multer')
const bodyParser = require('body-parser')

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecom',
  password: "''''",
  port: 5432,
})

const getItems = async (req, res, next) => {
  await pool.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.log(err, 17)
    }
    res.status(200).json(results.rows)
  })
}

const addProduct = async (req, res, next) => {
  const {
    name,
    price,
    category,
    scent,
    brand,
    target_gender,
    item_weight,
    about,
    image,
  } = req.body
  try {
    await pool.query(
      'INSERT INTO products (name, price, category, scent, brand, target_gender, item_weight, about, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        name,
        price,
        category,
        scent,
        brand,
        target_gender,
        item_weight,
        about,
        image,
      ],
      (err, result) => {
        if (!result) {
          res.status(500).json({ msg: err })
          next()
        }
        res.status(201).json(result.rows)
      }
    )
  } catch (error) {
    console.log(error)
  }
}

exports.getItems = getItems
exports.addProduct = addProduct
