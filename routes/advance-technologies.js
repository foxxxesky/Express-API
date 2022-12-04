const express = require('express')
const router = express.Router()
const Validator = require('fastest-validator')
const v = new Validator()
const { AdvanceTechnology } = require('../models')

// get all
router.get(
  '/',

  async (req, res) => {
    const data = await AdvanceTechnology.findAll()

    return res.json({
      status: 200,
      message: 'Success Get All Data',
      data
    })
  }
)

// get by id
router.get(
  '/:id',

  async (req, res) => {
    const id = req.params.id
    const data = await AdvanceTechnology.findByPk(id)

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: 'Data not found'
      })
    }

    return res.json({
      status: 200,
      message: 'Success Get Data',
      data
    })
  }
)

// add
router.post(
  '/add',

  async (req, res) => {
    const schema = {
      name: { type: 'string', min: 3 },
      status: { type: 'number', integer: true }
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
      return res.status(400).json(validate)
    }

    const data = await AdvanceTechnology.create(req.body)

    return res.json({
      status: 200,
      message: 'Success Create Data',
      data
    })
  }
)

// put
router.put(
  '/edit/:id',

  async (req, res) => {
    const id = req.params.id

    let data = await AdvanceTechnology.findByPk(id)
    // console.log(data.id)

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: 'Data not found'
      })
    }

    const condition = { where: { id: data.id } }

    const schema = {
      name: 'string|optional',
      status: 'number|optional'
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
      return res.status(400).json(validate)
    }

    data = await AdvanceTechnology.update(req.body, condition)

    return res.json({
      status: 200,
      message: 'Success Update Data'
    })
  }
)

// delete
router.delete(
  '/delete/:id',

  async (req, res) => {
    const id = req.params.id

    const data = await AdvanceTechnology.findByPk(id)

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: 'Data not found'
      })
    }

    const condition = { where: { id: data.id } }

    await AdvanceTechnology.destroy(condition)

    return res.json({
      status: 200,
      message: 'Success Delete Data',
      data
    })
  }
)

module.exports = router
