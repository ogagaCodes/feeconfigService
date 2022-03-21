const Joi = require("joi");

exports.createConfigSchema = Joi.object({
    FeeConfigurationSpec: Joi.string().required()
});


