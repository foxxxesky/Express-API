const express = require('express')
const router = express.Router()
const Validator = require('fastest-validator')
const v = new Validator()
const { AdvanceTechnology } = require('../models')

router.post(
  '/',

  async (req, res, next) => {
    const schema = {
      name: { type: 'string', min: 3 },
      status: { type: 'number', integer: true }
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
      return res.status(400).json(validate)
    }

    const data = await AdvanceTechnology.create(req.body)

    return res.json(data)
  }
)

module.exports = router
