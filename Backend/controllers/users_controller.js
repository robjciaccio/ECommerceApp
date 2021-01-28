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

const getUsers = async (req, res, next) => {
  await pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log('users-controller line 15')
    }
    res.status(200).json(results.rows)
  })
}

const createUser = async (request, response, next) => {
  const now = new Date()
  const {
    first_name,
    last_name,
    email,
    password,

    imageUri,
  } = request.body

  try {
    await pool.query(
      'INSERT INTO users (first_name, last_name, email, password, image )VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [first_name, last_name, email, password, imageUri],
      (err, result) => {
        console.log(result)
        if (!result['rows']) {
          newError = 'Username or Email already exist. Please try again'
          response.status(500).json({ msg: newError })
          next()
        }
        response.status(201).json(result.rows)
      }
    )
  } catch (error) {
    console.log(error)
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body

  let existingUser

  await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email],
    (err, result) => {
      if (result.rowCount > 0) {
        existingUser = result.rows[0]
        if (existingUser.password !== password) {
          res.json({ msg: 'incorrect password' })
          next()
        } else {
          res.json(existingUser)
          next()
        }
      } else {
        res.json({ msg: "username doesn't exist" })
        next()
      }
    }
  )
}

exports.getUsers = getUsers
exports.createUser = createUser
exports.login = login
