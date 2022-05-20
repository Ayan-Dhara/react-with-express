import express from "express"
import demoRouter from '@api/demo'

const router = express.Router()

router.use("/demo", demoRouter)

// handle with 404 error if route is not handled
router.all("*", (req, res) => {
  res.status(404).send({
    status: "NOT_FOUND"
  })
})

export default router
