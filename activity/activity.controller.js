import ActivityService from "./activity.service.js";

const getActivities = (req, res) => {
  ActivityService.getActivities(req.session.user)
    .then(data => res.send(data))
    .catch(error => res.status(400).send(error.message))
}

export default {
  getActivities
}
