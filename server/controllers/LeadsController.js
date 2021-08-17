const { sendLeadMail } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')
const { validate } = require('../utils/validation')

async function create(req, res) {
  const { isValid, error } = validate(req, 'email')
  if (!isValid) return res.status(error.status).json(error)

  await sendLeadMail(req.body)
  const response = await createLead(req)

  return res.json(response)
}

module.exports = {
  create,
}
