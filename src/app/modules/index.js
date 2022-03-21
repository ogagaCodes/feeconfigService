const { Router } = require("express");
const validateRequest = require("../../middlewares/validate");
const createSchema = require("../modules/proccessor/vallidators/create.schema");
const computeSchema = require("../modules/proccessor/vallidators/compute.schema");
const processorController = require("./proccessor/controllers");

const controller = new processorController();

const router = Router();
router.post(
  "/create",
  validateRequest(createSchema.createConfigSchema, "body"),
  controller.createConfig()
);

router.post(
  "/compute",
  validateRequest(computeSchema.computeFeesSchema, "body"),
  controller.computeCharges
);

module.exports = router;
