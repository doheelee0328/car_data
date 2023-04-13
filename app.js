const express = require('express')
const cors = require('cors')
const app = express()
const car = require('./cars.json')

app.use(cors()) // middleware, without this, you cannot use hopscotch
// allows to use the res.body
app.use(express.json())

app.get('/cars', (req, res) => {
  res.send(car)
})
// get request
app.get('/cars/:id', (req, res) => {
  const carId = Number(req.params.id)
  // getting the users input's id
  const cars = car.find((item) => item.id === carId)
  // checking if the item from the car is equal to what the user has typed
  if (cars === undefined) {
    // if what the user has typed and the content json files do not match
    res.status(400).send({ error: 'Car does not exist' })
    // return this
  } else {
    res.send(cars)
  }
})
// make our new cars
app.post('/cars', (req, res) => {
  const newCar = req.body
  const ids = car.map((item) => item.id)
  let max = ids.reduce((first, second) => {
    return first > second ? first : second
  }, ids[0])
  // get the maximum id

  const cars = car.find((item) => item.name === req.body.name)

  if (cars !== undefined) {
    res.status(400).send({ error: 'Car name already exists' })
  } else {
    max += 1
    // we add it to 1 because we do not want to clash with other ids
    car.push(newCar)
    // add a new car as an element to the empty object
    res.send(newCar)
    // now we want to send the new element to the server
  }
  // use push to add new items into the body

  // make new friends based on the data
})

module.exports = app
