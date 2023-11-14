import { User } from '../config/models/User.js'

const createUser = async (user) => {
  const { dataValues } = await User.create(user)
  return dataValues
}

export default {
  createUser
}
