let express = require('express')
let router = express.Router()

const lunchWeekList = [
  {
    lunchWeekId: 1,
    weekOf: '2020-01-19',
    isPublished: true,
  },
  {
    lunchWeekId: 2,
    weekOf: '2020-01-20',
    isPublished: false,
  },
  {
    lunchWeekId: 3,
    weekOf: '2020-01-21',
    isPublished: false,
  },
  {
    lunchWeekId: 4,
    weekOf: '2020-01-25',
    isPublished: true,
  },
]

router.get('/', (req, res) => {
  res.send(lunchWeekList)
})

router.get('/:lunchWeekId', (req, res) => {
  let id = parseInt(req.params.lunchWeekId)
  let lunchWeekId = lunchWeekList.find((x) => x.lunchWeekId === id)
  if (lunchWeekId) {
    res.send(lunchWeekId)
  } else {
    res.status(404).send(' Id not found, try again')
  }
  res.send(lunchWeekList)
})

module.exports = router
