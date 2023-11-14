import UserService from './user.service.js';

const createUser = (req, res) => {
  UserService.createUser(req.body)
    .then(data => {
      req.session.user = data
      res.send(data)
    })
    .catch(error => res.status(400).send(error.message))
}

export default {
  createUser
}