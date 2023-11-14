export default function (err, _req, res, _next) {
  console.error(err)
  res.status(400).send(err.message ?? "Something went wrong")
}