import UserService from './user.service.js';

const createUser = async (req, res, next) => {
  try {
    const data = await UserService.createUser(req.body)
    req.session.user = data;
    res.send(data)
  } catch (error) {
    next(error)
  }
}

export default {
  createUser
}