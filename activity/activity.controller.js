import ActivityService from "./activity.service.js";

const getActivities = async (req, res, next) => {
  try {
    const data = await ActivityService.getActivities(req.session.user)
    res.send(data)
  } catch (error) {
    next(error)
  }
}

export default {
  getActivities
}
